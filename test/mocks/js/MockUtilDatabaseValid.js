export default class MockUtilDatabase {
  constructor({ connectionString }) {
    this.connectionString = connectionString;
  }
  connect = () => this;
  find = () => require("../json/validDatabase.json");
}
