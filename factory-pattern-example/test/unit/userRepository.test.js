const { describe, it } = require("mocha");
const { assert, deepStrictEqual } = require("assert");
const sinon = require("sinon");
const validDatabase = require("../mocks/json/validDatabase.json");
const UserRepository = require("../../src/repository/userRepository.js");

describe("User repository test suite", () => {
  it("Should return all users contained on the database", async () => {
    const dbConnectionStub = {
      find: sinon.stub().resolves(validDatabase),
    };

    const userRepository = new UserRepository({
      dbConnection: dbConnectionStub,
    });

    const expected = validDatabase;
    const result = await userRepository.find();
    deepStrictEqual(expected, result);
  });
});
