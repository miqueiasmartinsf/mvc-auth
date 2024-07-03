import { IUserRepository } from "../../../interfaces/IUserRepository";
import { UserModel } from "../../../models/UserModel";
import { ICreateUserDTO } from "./createUserDTO";

export class CreateUserUseCase {
    constructor(private UserRepository: IUserRepository) {}

    async execute(data: ICreateUserDTO): Promise<UserModel> {
        
        console.log(123);

        const userAlreadyExists = this.UserRepository.findByEmail(data.email);
        
        if (!userAlreadyExists) {
            throw new Error("User already exists") || "Unexpected Error";
        }

        const response = await this.UserRepository.create(data);
        return response;
    }
}
