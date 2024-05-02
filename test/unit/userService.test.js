const { describe, it } = require("mocha");
const { assert, deepStrictEqual } = require("assert");
const sinon = require("sinon");
const validUpperUserMock = require("../mocks/json/validUpperUser.json");
const validLowerUserMock = require("../mocks/json/validLowerUser.json");
const UserService = require("../../src/service/userService");

describe("User service test suite", () => {
  it("Should return list of users matching a specific string", async () => {
    const userRepositoryStub = {
      find: sinon.stub().resolves(validUpperUserMock),
    };

    const userService = new UserService({ userRepository: userRepositoryStub });

    const expected = validUpperUserMock;
    const result = await userService.getUsers("x");

    deepStrictEqual(result, expected);
  });

  it("Given a lower case user name should return an upper case user name", async () => {
    const userRepositoryStub = {
      find: sinon.stub().resolves(validLowerUserMock),
    };

    const userService = new UserService({ userRepository: userRepositoryStub });

    const expected = validUpperUserMock;
    const result = await userService.getUsers("x");

    deepStrictEqual(result, expected);
  });
});
