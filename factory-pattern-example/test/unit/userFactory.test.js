const { describe, it } = require("mocha");
const { assert, deepStrictEqual } = require("assert");
const rewiremock = require("rewiremock/node");
const MockValidUtilDatabase = require("../mocks/js/MockUtilDatabaseValid.js");

describe("User factory test suite", () => {
  it("Given a valid mocked database should return a valid user service object instance", async () => {
    rewiremock(() => require("../../src/util/database.js")).with(
      MockValidUtilDatabase
    );

    rewiremock.enable();
    const userFactory = require("../../src/factory/userFactory.js");
    rewiremock.disable();

    const expected = require("../mocks/json/validUpperDatabase.json");
    const result = await (await userFactory.createInstance()).getUsers();

    deepStrictEqual(expected, result);
  });
});
