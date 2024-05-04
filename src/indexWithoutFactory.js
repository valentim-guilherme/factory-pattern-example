const UserService = require("./service/userService.js");
const UserRepository = require("./repository/userRepository.js");
const Database = require("./util/database.js");

(async () => {
  const db = new Database({ connectionString: "mysql:host" });
  const dbConnection = await db.connect();
  const userRepository = new UserRepository({ dbConnection });
  const userService = new UserService({ userRepository });
  const result = await userService.getUsers({ name: "Guilherme*" });

  console.log(result);
})();
