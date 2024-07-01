import { AuthRepository } from "./AuthRepository";
import { IAuthRepository } from "../interfaces/IAuthRepository";

class BasicController {
    repo: AuthRepository;
    constructor(repo: any) {
        this.repo = repo;
    }
}

const MyController = new BasicController(AuthRepository);
