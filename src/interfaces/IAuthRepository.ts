import { UserModel } from "../models/UserModel";

export type loginSchema = {
    email: string;
    password: string;
};

export interface IAuthRepository {
    login({}: loginSchema): Promise<UserModel>;
    register(data: UserModel): Promise<UserModel | void>;
}
