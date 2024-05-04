import UserFactory from "./factory/userFactory.js";

(async () => {
  const userFactory = await UserFactory.createInstance();
  const result = await userFactory.getUsers({ name: "Guilherme*" });

  console.log(result);
})();
