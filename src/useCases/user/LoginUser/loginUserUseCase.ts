import { IUserRepository } from "../../../interfaces/IUserRepository";
import { LoginUserDTO } from "./loginUserDTO";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import "dotenv/config";

export class LoginUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private jsonWebTokenPass: string = "root"
    ) {}

    execute = async (data: LoginUserDTO): Promise<string> => {
        const userExists = await this.userRepository.findByEmail(data.email);

        if (userExists === null) {
            throw new Error("User not signedup");
        }

        if (
            !bcrypt.compareSync(data.password, userExists.dataValues.password)
        ) {
            throw new Error("Incorrect password");
        }

        const token = jsonwebtoken.sign(data.email, this.jsonWebTokenPass);

        return token;
    };
}
