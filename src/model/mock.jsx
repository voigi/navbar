// ESM
import { faker } from '@faker-js/faker';


export function mock() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.userName({ firstName:'John'}),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password({ length:8,pattern:/[#?!@$ %^&*-,a-z,A-Z,0-9]/}),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    tournoi: faker.datatype.boolean(0.5),
    snookerFavoriteGames: faker.helpers.arrayElements(["Pool anglais",
    "Snooker",
    "Billard américain",
    "Carambole",
    "Blackball"], 3),
    

  };
}

export const users = faker.helpers.multiple(mock, {
  count: 5,

});

console.log(users);