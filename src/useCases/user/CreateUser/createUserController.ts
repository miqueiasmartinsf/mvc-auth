import { IUserRepository } from "../../../interfaces/IUserRepository";
import { CreateUserUseCase } from "./createUserUseCase";
import { Request, Response } from "express";
import { Random } from "../../random";

export class CreateUserController {
    constructor(
        private CreateUserUseCase: CreateUserUseCase,
        private Random: Random
    ) {}

    async handle(req: Request, res: Response) {
        const { email, name, password } = req.body;
        try {
            this.Random.main();

            //await this.CreateUserUseCase.execute({ email, name, password });
        } catch (error) {
            res.status(400).json(error);
        }
    }
}
