import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

//DATABASE CONNECTION
connectDB();

//global error hanlder
app.use((err: any, _req: Request, _res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).send(err?.response?.data?.message || err?.message);
});

await app.get("/", (_req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
