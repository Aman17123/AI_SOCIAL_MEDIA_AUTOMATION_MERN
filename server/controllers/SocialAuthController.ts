import { Request, Response } from "express";
import zernio from "../config/zernio";
import { Account } from "../models/Accounts"; 
import { User } from "../models/user.js";


// helper to ensure user has a zernio profile
const getOrCreateZernioProfile = async(user: any) : Promise<string> => {
    try{
        const result  =  await zernio.profiles.listProfiles()
        const data = result.data as any;
        const profiles: any[] = Array.isArray(data) ? data?.profiles || data?.data || [];
        if ( profiles.length > 0) {
            const pid = profiles[0]._id || profiles[0]._id 
            await User.findByIdAndUpdate(user._id, {zernioProfileId: pid})
            return pid;
        } 
        const createResult  = await zernio.profiles.createProfile({
            body: {name: `${user.name} || ${user.email}'s workspace`} as any
        })
        const created = (createResult.data as any)?.profile || createResult.data;

        const pid = created?._id || created?.id;

        if(!pid){
            throw new Error("failed to crate Zernio profile - no ID returned")
        }

        await User.findByIdAndUpdate(user._id , { zernioProfileId: pid});
        return pid; 
        
    }catch (error: any){
        console.error("getOrCreateZernioProfile Error:", error?.message || error);
        throw error;
        
    }
    
}

// Generaate Oauth authorization URL 
// GEt api/auth/connect/:platform

export const generateAuthUrl = async ( req: Request , res: Response) : Promise<void> => {
    try {
      const { platform } = req.params;
        const profileId = await getOrCreateZernioProfile(req.user);

        const origin = req.headers.origin;
        const redirectUrl = `${origin}/accounts`;

        const result = await zernio.connect.getConnectUrl({
            path: {platform: platform as any },
            query: {
                profileId: profileId,
                edirectUrl: redirectUrl
            }
        })

        const data = result.data as any;
        console.log("getConnectUrl:", JSON.stringify(data, null, 2));

        const authUrl = data.authURL;

        if(!authUrl){
            throw new Error(`Zernio returned no authUrl. Full response: ${JSON.stringify(data)} `)
        }

        res.json({url:authUrl})
    } catch (error: any) {
        res.status(500).json({
            message: error?.message || "Server error"
        })
    }
}

// sync connected account from zernio to MongoDB
//GET /api/auth/sync

export const syncAccounts = async (req: Request, res: Response): Promise<void> => {
    try{
        const profileId = await getOrCreateZernioProfile(req.user);
        const result = await zernio.accounts.listAccounts({
            query: {profileId} as any 
        })

        const data = result.data as any ;
        const zernioAccounts: any[] = data?.accounts || (Array.isArray(data)? data : []);
        const supportedPlatforms = new ["twitter", "linkedin", "facebook", "instagram"];
        const syncedAccount = [];

        for( const zAccount of zernioAccounts){
            const zid = zAccount._id  || zAccount.id;
            if(!zid){
                console.warn("Skipping account with no ID:", zAccount);
                continue;
            }

            const rawPlatform = (zAccount.platform || zAccount.type || "").toLowerCase();
            const normalizedPlatform = supportedPlatforms.find((p)=> rawPlatform.includes(p));

            if(!normalizedPlatform){
                console.log(`Skipping unsupported platform: "${rawPlatform}"` , zAccount);
                continue;
            }

            const account = await Account.findOneAndUpdate(
                {zernioAccountId: zid},
                {
                    user: req.user._id,
                    
                }

            );

        }
 
    } catch (error) {

    }
};