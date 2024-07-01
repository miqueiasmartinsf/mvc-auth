import { UserModel } from "../models/UserModel";
import { IUserRepository } from "../interfaces/IUserRepository";

export class UserRepository implements IUserRepository {
    login(data: UserModel): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    findByEmail(id: string): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    create(data: UserModel): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
}
