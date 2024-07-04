import { IUserRepository } from "../../../interfaces/IUserRepository";
import { LoginUserDTO } from "./loginUserDTO";

export class LoginUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    execute = async (data: LoginUserDTO) => {};
}
