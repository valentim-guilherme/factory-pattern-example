import { describe, it } from "mocha";
import { deepStrictEqual } from "assert";
import Sinon from "sinon";
import UserService from "../../src/service/userService.js";

import validLowerUserMock from "../mocks/json/validLowerUser.json" assert { type: "json" };
import validUpperUserMock from "../mocks/json/validUpperUser.json" assert { type: "json" };

describe("User service test suite", () => {
  it("Should return list of users matching a specific string", async () => {
    const userRepositoryStub = {
      find: Sinon.stub().resolves(validUpperUserMock),
    };

    const userService = new UserService({ userRepository: userRepositoryStub });

    const expected = validUpperUserMock;
    const result = await userService.getUsers("x");

    deepStrictEqual(result, expected);
  });

  it("Given a lower case user name should return an upper case user name", async () => {
    const userRepositoryStub = {
      find: Sinon.stub().resolves(validLowerUserMock),
    };

    const userService = new UserService({ userRepository: userRepositoryStub });

    const expected = validUpperUserMock;
    const result = await userService.getUsers("x");

    deepStrictEqual(result, expected);
  });
});
