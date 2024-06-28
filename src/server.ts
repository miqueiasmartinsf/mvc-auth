import express from "express";
import { app } from "./app";
import { authenticateDB } from "./database";

const PORT = 3000;

app.listen(PORT, () => {
    console.log("server is running");
    authenticateDB();
});
