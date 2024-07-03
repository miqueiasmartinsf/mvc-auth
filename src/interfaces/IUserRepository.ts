import { UserModel } from "../models/UserModel";
import { ICreateUserDTO } from "../useCases/user/CreateUser/createUserDTO";

export interface IUserRepository {
    login(data: ICreateUserDTO): Promise<UserModel>;
    findByEmail(id: string): Promise<UserModel>;
    create(data: ICreateUserDTO): Promise<UserModel>;
}
