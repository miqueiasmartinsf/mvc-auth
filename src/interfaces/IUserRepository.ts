import { UserModel } from "../models/UserModel";

export interface IUserRepository {
    findAll(): Promise<UserModel[]>;
    findById(id: string): Promise<UserModel | void>;
    create(data: UserModel): void;
    delete(id: string): void;
    update(id: string, data: UserModel): Promise<UserModel>;
}
