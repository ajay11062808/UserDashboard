import users from '../data.json';

export const fetchUsers = async () => {
  // replace this with a real API call in your production code
  return users;
};

export const createUser = async (user) => {
  // simulate an API call
  const newUser = {
    id: Math.max(...users.map(u => u.id)) + 1,
    ...user,
    creationDate: new Date().toISOString().slice(0, 10),
  };
  users.push(newUser);
  return newUser;
};
