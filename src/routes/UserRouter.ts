import express from "express";
import path from "path";
import { CreateUserControllerInstance } from "../useCases/user/CreateUser/implementations";
import { LoginUserControllerImplementation } from "../useCases/user/LoginUser/implementations";

export const UserRouter = express.Router();

// UserRouter.use(express.static(path.join("/src/pages", "public")));

// // UserRouter.get("/", (req, res) => {
// //     res.sendFile("index.html", { root: path.join("src", "pages") }, () =>
// //         res.json({ message: "error" })
// //     );
// // });

UserRouter.get("/", (req, res) => {
    res.json({ message: "success" });
});

UserRouter.post("/auth/register", CreateUserControllerInstance.handle);
UserRouter.post("/auth/login", LoginUserControllerImplementation.handle);
