import { LoginUserUseCase } from "./loginUserUseCase";
import { Request, Response } from "express";

export class LoginUserController {
    constructor(private loginUserUseCase: LoginUserUseCase) {}

    handle = async (req: Request, res: Response): Promise<Response> => {
        const { email, password } = req.body;

        try {
            const token = await this.loginUserUseCase.execute({
                email,
                password,
            });
            return res.status(200).json({ auth_token: token });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
            return res.status(400);
        }

        return res;
    };
}
