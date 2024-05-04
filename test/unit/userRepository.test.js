import { describe, it } from "mocha";
import { deepStrictEqual } from "assert";
import Sinon from "sinon";

import UserRepository from "../../src/repository/userRepository.js";
import validDatabase from "../mocks/json/validDatabase.json" assert { type: "json" };

describe("User repository test suite", () => {
  it("Should return all users contained on the database", async () => {
    const dbConnectionStub = {
      find: Sinon.stub().resolves(validDatabase),
    };

    const userRepository = new UserRepository({
      dbConnection: dbConnectionStub,
    });

    const expected = validDatabase;
    const result = await userRepository.find();
    deepStrictEqual(expected, result);
  });
});
