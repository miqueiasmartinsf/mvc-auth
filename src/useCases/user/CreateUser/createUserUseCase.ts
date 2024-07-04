import { IUserRepository } from "../../../interfaces/IUserRepository";
import { UserModel } from "../../../models/UserModel";
import { ICreateUserDTO } from "./createUserDTO";
import { UserSchema } from "../../../models/UserModel";
import { uid } from "uid";

export class CreateUserUseCase {
    constructor(private UserRepository: IUserRepository) {}

    async execute(data: ICreateUserDTO): Promise<UserSchema> {
        data.id = uid(24);

        const userAlreadyExists = await this.UserRepository.findByEmail(
            data.email
        );

        if (userAlreadyExists !== null) {
            throw new Error("User already exists");
        }

        const response = await this.UserRepository.create(data);
        return response;
    }
}
