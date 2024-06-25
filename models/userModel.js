const bcrypt = require('bcrypt');

let users = [
  {
    id: 1,
    email: 'user@example.com',
    password: bcrypt.hashSync('password', 10),
  },
];

const User = {
  getUserByEmail: (email, result) => {
    const user = users.find((user) => user.email === email);
    result(null, user);
  },
  addUser: (user, result) => {
    users.push(user);
    result(null, user);
  },
};

module.exports = User;
