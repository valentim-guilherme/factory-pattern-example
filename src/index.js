/*
//without factory

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
*/

//with factory
const UserFactory = require("./factory/userFactory.js");

(async () => {
  const userFactory = await UserFactory.createInstance();
  const result = await userFactory.getUsers({ name: "Guilherme*" });

  console.log(result);
})();
