import { UserModel } from "../models/UserModel";

export interface IAuthRepository {
    login(): Promise<UserModel>;
    register(): Promise<UserModel>;
}
