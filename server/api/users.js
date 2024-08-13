// server/api/generate-users.js
import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from "uuid";

export default defineEventHandler((event) => {
  // Get the 'num' query parameter from the request
  const query = getQuery(event);

  // Use the 'seed' query parameter or default to a constant value for consistency
  const seed = query.seed ? parseInt(query.seed) : 12345;
  faker.seed(seed);

  const numUsers = parseInt(query.num) || 1;

  const users = Array.from({ length: numUsers }, () => ({
    id: uuidv4(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    avatar: faker.image.url(),
  }));

  // Return the generated users
  return {
    status: 200,
    message: 'User List fetched successfully',
    data: users,
  };
});
