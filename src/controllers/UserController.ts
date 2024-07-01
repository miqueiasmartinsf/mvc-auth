import { Request, Response } from "express";
import { AuthRepository } from "../repositories/AuthRepository";


export class UserController {

    static async login(req: Request, res: Response) {
        const { email, password } = req.body;
    }

    static async register(req: Request, res: Response) {
        const { email, password, name } = req.body;

        const emailRegEx = /^\S+@\S+\.\S+$/;
        if (!emailRegEx.test(email)) return;
    }
}
