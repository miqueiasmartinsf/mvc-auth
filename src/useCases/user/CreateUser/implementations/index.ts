import { CreateUserController } from "../createUserController";
import { CreateUserUseCase } from "../createUserUseCase";
import { UserRepository } from "../../../../repositories/UserRepository";


const userRepository = new UserRepository();

const userUseCase = new CreateUserUseCase(userRepository);

export const CreateUserControllerInstance = new CreateUserController(userUseCase);
