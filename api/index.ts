import app from "../server/server.js";
import connectDB from "../server/config/db.js";

export default async function handler(req: any, res: any) {
  try {
    await connectDB();
  } catch (error) {
    console.error("Failed to connect to DB:", error);
    res.status(500).json({ error: "Database connection failed" });
    return;
  }
  return app(req, res);
}
