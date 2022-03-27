"use strict";
const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john@metropolia.fi",
    password: "1234",
  },
  {
    id: "2",
    name: "Jane Doez",
    email: "jane@metropolia.fi",
    password: "qwer",
  },
];

const getUser = (id) => {
  return users.find((user) => user.id === id);
};

const getUserLogin = (email) => {
  const user = users
    .filter((user) => {
      if (user.email === email) {
        return user;
      }
    })
    .pop();
  return user;
};

module.exports = {
  users,
  getUser,
  getUserLogin,
};
