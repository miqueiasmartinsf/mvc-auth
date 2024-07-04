import { UserModel, UserSchema } from "../models/UserModel";
import { ICreateUserDTO } from "../useCases/user/CreateUser/createUserDTO";

export interface IUserRepository {
    login(data: ICreateUserDTO): Promise<UserModel>;
    findByEmail(email: string): Promise<UserSchema | null>;
    create(data: ICreateUserDTO): Promise<UserSchema>;
}
