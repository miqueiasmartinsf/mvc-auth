import { LoginUserUseCase } from "./loginUserUseCase";
import { Request, Response } from "express";

export class LoginUserController {
    constructor(private loginUserUseCase: LoginUserUseCase) {}

    handle = async (req: Request, res: Response): Promise<Response> => {
        const { email, password } = req.body;

        try {
            await this.loginUserUseCase.execute({ email, password });
        } catch (error) {
            console.log(error);
        }

        return res;
    };
}
