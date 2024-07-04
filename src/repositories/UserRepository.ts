import { UserModel } from "../models/UserModel";
import { IUserRepository } from "../interfaces/IUserRepository";
import { ICreateUserDTO } from "../useCases/user/CreateUser/createUserDTO";

export class UserRepository implements IUserRepository {
    login(data: ICreateUserDTO): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    findByEmail(id: string): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    create(data: ICreateUserDTO): Promise<UserModel> {
        console.log("repository")
        throw new Error("Method not implemented.");
    }
}
