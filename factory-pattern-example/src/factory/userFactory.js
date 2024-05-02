const Database = require("../util/database.js");
const UserRepository = require("../repository/userRepository.js");
const UserService = require("../service/userService.js");

class UserFactory {
  static async createInstance() {
    const db = new Database({ connectionString: "mysql:host" });
    const dbConnection = await db.connect();
    const userRepository = new UserRepository({ dbConnection });
    const userService = new UserService({ userRepository });

    return userService;
  }
}

module.exports = UserFactory;
