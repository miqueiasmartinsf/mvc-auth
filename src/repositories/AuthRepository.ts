import { IAuthRepository } from "../interfaces/IAuthRepository";
import { UserModel } from "../models/UserModel";

export class AuthRepository implements IAuthRepository {
    login(): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    register(): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
}
