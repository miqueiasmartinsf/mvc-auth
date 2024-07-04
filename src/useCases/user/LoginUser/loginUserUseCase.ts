import { IUserRepository } from "../../../interfaces/IUserRepository";
import { LoginUserDTO } from "./loginUserDTO";
import bcrypt from "bcrypt";

export class LoginUserUseCase {
    constructor(private userRepository: IUserRepository) {}

    execute = async (data: LoginUserDTO) => {
        const userExists = this.userRepository.findByEmail(data.email);

        if (userExists !== null) {
        }
    };
}
