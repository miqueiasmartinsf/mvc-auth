import { IAuthRepository } from "../interfaces/IAuthRepository";
import { UserModel } from "../models/UserModel";
import { loginSchema } from "../interfaces/IAuthRepository";
import { UserSchema } from "../models/UserModel";

const emailRegEx = /^\S+@\S+\.\S+$/;

export const emailValidator = (email: string) => emailRegEx.test(email);

export class AuthRepository implements IAuthRepository {
    login({ email, password }: loginSchema): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    async register({
        email,
        name,
        password,
    }: UserModel): Promise<UserModel | void> {
        try {
            const emailRegEx = /^\S+@\S+\.\S+$/;
            if (!emailRegEx.test(email)) return;

            const currentUser = new UserSchema({ email, name, password });

            await currentUser.save();
        } catch (error) {}
    }
}
