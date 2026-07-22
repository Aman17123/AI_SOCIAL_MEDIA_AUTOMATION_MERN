import { Response } from "express";
import { AuthRequest } from "../middlewares/authMiddleware.js";
import { Account } from "../models/Accounts.js";
import zernio from "../config/zernio.js";

//! Get all accounts
//! GET /api/accounts
export const getAccounts = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const accounts = await Account.find({ user: req.user._id });
    console.log(`[getAccounts] userId=${req.user._id}, found ${accounts.length} accounts`);
    res.json(accounts);
  } catch (error: any) {
    console.error("[getAccounts] Error:", error?.message || error);
    res
      .status(500)
      .json({ message: error?.message || "Failed to fetch accounts" });
  }
};

//! Add accounts
export const addAccounts = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    const { platform, handle, avatarURL } = req.body;
    const accounts = await Account.create({
      user: req.user._id,
      platform,
      handle,
      avatarURL,
    });
    res.status(201).json(accounts);
  } catch (error: any) {
    res
      .status(500)
      .json({ message: error?.message || "Failed to fetch accounts" });
  }
};

//! Disconnecet Accounts
//! DELETE api/accounts/:id
export const disconnectAccount = async (
  req: AuthRequest,
  res: Response,
): Promise<void> => {
  try {
    console.log(`[disconnectAccount] userId=${req.user._id}, accountId=${req.params.id}`);
    const account = await Account.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!account) {
      console.warn(`[disconnectAccount] Account ${req.params.id} not found for user ${req.user._id}`);
      res.status(404).json({ message: "Account not found" });
      return;
    }
    if (account.zernioAccountId) {
      try {
        console.log(`[disconnectAccount] Deleting from Zernio: zernioAccountId=${account.zernioAccountId}`);
        await zernio.accounts.deleteAccount({
          path: { accountId: account.zernioAccountId },
        });
      } catch (error: any) {
        res
          .status(500)
          .json({ message: error?.response?.data?.message || error?.message });
        return;
      }
    }
    await account.deleteOne();
    console.log(`[disconnectAccount] Account ${req.params.id} removed successfully`);
    res.json({ message: "Account removed successfully" });
  } catch (error: any) {
    console.error("[disconnectAccount] Error:", error?.message || error);
    res
      .status(500)
      .json({ message: error?.message || "Failed to disconnect account" });
  }
};
