import express from "express";

import { UserRouter } from "./routes/UserRouter";

export const app = express();

app.use(UserRouter);
