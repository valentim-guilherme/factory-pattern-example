import { describe, it } from "mocha";
import { deepStrictEqual } from "assert";
import MockValidUtilDatabase from "../mocks/js/MockUtilDatabaseValid.js";
import rewiremock from "rewiremock";

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
