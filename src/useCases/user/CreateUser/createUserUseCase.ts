import { IUserRepository } from "../../../interfaces/IUserRepository";
import { UserModel } from "../../../models/UserModel";
import { ICreateUserDTO } from "./createUserDTO";
import { UserSchema } from "../../../models/UserModel";
import { uid } from "uid";
import bcrypt from "bcrypt";

export class CreateUserUseCase {
    constructor(private UserRepository: IUserRepository) {}

    async execute(data: ICreateUserDTO): Promise<UserSchema> {
        const userAlreadyExists = await this.UserRepository.findByEmail(
            data.email
        );

        if (userAlreadyExists !== null) {
            throw new Error("User already exists");
        }

        data.id = uid(24);
        data.password = bcrypt.hashSync(data.password, 5);

        const response = await this.UserRepository.create(data);
        return response;
    }
}
