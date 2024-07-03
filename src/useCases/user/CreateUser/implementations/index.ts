import { CreateUserController } from "../createUserController";
import { CreateUserUseCase } from "../createUserUseCase";
import { UserRepository } from "../../../../repositories/UserRepository";
import { Random } from "../../../random";

const userRepository = new UserRepository();

const UserUseCase = new CreateUserUseCase(userRepository);

const random = new Random();

export const UserController = new CreateUserController(UserUseCase, random);
