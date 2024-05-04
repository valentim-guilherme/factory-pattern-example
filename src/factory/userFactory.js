import Database from "../util/database.js";
import UserRepository from "../repository/userRepository.js";
import UserService from "../service/userService.js";

export default class UserFactory {
  static async createInstance() {
    const db = new Database({ connectionString: "mysql:host" });
    const dbConnection = await db.connect();
    const userRepository = new UserRepository({ dbConnection });
    const userService = new UserService({ userRepository });

    return userService;
  }
}
