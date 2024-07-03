import express from "express";
import { UserRouter } from "./routes/UserRouter";
import cors from "cors";

export const app = express();

app.use(express.json());
app.use(cors());

app.use(UserRouter);
