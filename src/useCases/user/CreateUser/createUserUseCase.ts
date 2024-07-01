import { IUserRepository } from "../../../interfaces/IUserRepository";
import { UserModel } from "../../../models/UserModel";

export class CreateUserUseCase {
    private UserRepository: IUserRepository;

    constructor(UserRepository: IUserRepository) {
        this.UserRepository = UserRepository;
    }

    async execute(data: UserModel): Promise<UserModel> {
        const userAlreadyExists = this.UserRepository.findByEmail(data.email);

        if (!userAlreadyExists) {
            throw new Error("User already exists") || "Unexpected Error";
        }

        const response = await this.UserRepository.create(data);
        return response;
    }
}
