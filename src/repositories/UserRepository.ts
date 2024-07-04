import { UserModel, UserSchema } from "../models/UserModel";
import { IUserRepository } from "../interfaces/IUserRepository";
import { ICreateUserDTO } from "../useCases/user/CreateUser/createUserDTO";

export class UserRepository implements IUserRepository {
    async login(data: ICreateUserDTO): Promise<UserModel> {
        throw new Error("Method not implemented.");
    }
    async findByEmail(email: string): Promise<UserSchema | null> {
        const user = await UserSchema.findOne({ where: { email: email } });
        console.log(user);
        return user;
    }
    async create(data: ICreateUserDTO): Promise<UserSchema> {
        console.log(data);
        const user = await UserSchema.create({
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
        });

        await user.save();
        return user;
    }
}
