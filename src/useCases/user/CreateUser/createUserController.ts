import { IUserRepository } from "../../../interfaces/IUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
    private CreateUserUseCase = CreateUserUseCase;
    constructor() {
        this.CreateUserUseCase = CreateUserUseCase;
    }

    async handle(req: Request, res: Response) {
        const { email, name, password } = req.body;

        try{
            this.CreateUserUseCase.
        }

    }
}
