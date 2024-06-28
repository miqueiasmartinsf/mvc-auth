import { UserModel } from "../models/UserModel";
import { IUserRepository } from "../interfaces/IUserRepository";
import { IBaseRepository } from ".";

export class UserRepository
    implements IUserRepository, IBaseRepository<UserModel>
{
    findAll(): Promise<UserModel[]> {
        throw new Error("Method not implemented.");
    }
    findById(): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    create(data: UserModel): void {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: UserModel): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
}
