import { LoginUserController } from "../loginUserController";
import { LoginUserUseCase } from "../loginUserUseCase";
import { UserRepository } from "../../../../repositories/UserRepository";

const UserRepositoryImplementation = new UserRepository();

const LoginUserUseCaseImplementation = new LoginUserUseCase(
    UserRepositoryImplementation
);

export const LoginUserControllerImplementation = new LoginUserController(
    LoginUserUseCaseImplementation
);
