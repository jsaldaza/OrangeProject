import { faker } from '@faker-js/faker';

class UserFactory {
  static generateUser() {
    return {
      username: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email()
    };
  }
}

export default UserFactory;
