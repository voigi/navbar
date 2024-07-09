// ESM
import { faker } from '@faker-js/faker';






export function mock() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName({ firstName:'John'}),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password({ length:5, memorable:true }),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
  };
}

export const users = faker.helpers.multiple(mock, {
  count: 5,
});

console.log(users);