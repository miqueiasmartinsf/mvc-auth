import { IUserRepository } from "../../../interfaces/IUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    handle = async (req: Request, res: Response): Promise<Response> => {
        const { email, name, password } = req.body;
        try {
            await this.createUserUseCase.execute({ email, name, password });
            return res.status(200);
        } catch (error) {
            console.error(error);
            return res.send();
        }
    };
}
