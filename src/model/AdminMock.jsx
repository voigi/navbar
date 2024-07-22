// ESM
import { faker } from '@faker-js/faker';


export function Adminmock() {
  return {
    userId: faker.string.uuid(),

    username: faker.internet.userName({ firstName:'John',lastName:'Doe',suffix:''}),
    email: faker.internet.email(), 
    password: faker.internet.password({ length:8,pattern:/[#?!@$ %^&*-,a-z,A-Z,0-9]/}),

    

  };
}

export const admins = faker.helpers.multiple(Adminmock, {
  count: 1,

});

console.log(admins);