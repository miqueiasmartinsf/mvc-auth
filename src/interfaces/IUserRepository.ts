import { UserModel } from "../models/UserModel";

export interface IUserRepository {
    login(data: UserModel): Promise<UserModel>;
    findByEmail(id: string): Promise<UserModel>;
    create(data: UserModel): Promise<UserModel>;
}
