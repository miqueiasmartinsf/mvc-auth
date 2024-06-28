import express from "express";
import path from "path";

export const UserRouter = express.Router();

UserRouter.use(express.static(path.join("/src/pages", "public")));

// UserRouter.get("/", (req, res) => {
//     res.sendFile("index.html", { root: path.join("src", "pages") }, () =>
//         res.json({ message: "error" })
//     );
// });

UserRouter.get("/", (req, res) => {
    res.json({ message: "success" });
});
