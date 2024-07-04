import { CreateUserController } from "../createUserController";
import { CreateUserUseCase } from "../createUserUseCase";
import { UserRepository } from "../../../../repositories/UserRepository";


const userRepository = new UserRepository();

const UserUseCase = new CreateUserUseCase(userRepository);

export const UserController = new CreateUserController(UserUseCase);
