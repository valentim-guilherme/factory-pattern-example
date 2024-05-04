export default class UserService {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async getUsers(query) {
    const users = await this.userRepository.find(query);
    return users.map((item) => ({ ...item, name: item.name.toUpperCase() }));
  }
}
