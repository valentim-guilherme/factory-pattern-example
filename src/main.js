import UserService from "./service/userService.js";
import UserRepository from "./repository/userRepository.js";
import Database from "./util/database.js";

export default class Main {
  static async start() {
    const db = new Database({ connectionString: "mysql:host" });
    const dbConnection = await db.connect();
    const userRepository = new UserRepository({ dbConnection });
    const userService = new UserService({ userRepository });
    const result = await userService.getUsers({ name: "Guilherme*" });

    console.log(result);
  }
}

(async () => {
  Main.start();
})();
