import { IUserRepository } from "../../../interfaces/IUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
    private createUserUseCase: CreateUserUseCase;

    constructor(createUserUseCase: CreateUserUseCase) {
        this.createUserUseCase = createUserUseCase;
    }

    async handle(req: Request, res: Response) {
        const { email, name, password } = req.body;
        try {
            await this.createUserUseCase.execute({ email, name, password });
        } catch (error) {
            res.status(400).json(error);
        }
    }
}
