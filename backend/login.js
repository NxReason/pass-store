const fs = require('fs/promises');

async function login(_, ...args) {
  const [name, pass] = args;
  const usersStr = await fs.readFile('./backend/data/_users.json', {
    encoding: 'utf-8',
  });
  const users = JSON.parse(usersStr);
  const user = users.find(user => user.name === name);
  if (user && user.pass === pass) {
    return true;
  }
  return false;
}

module.exports = login;
