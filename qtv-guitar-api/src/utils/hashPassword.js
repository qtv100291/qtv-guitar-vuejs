const { compare, hash } = require("bcryptjs");

async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
}

async function comparePassword(password, hashedPassword) {
  const isEqual = await compare(password, hashedPassword);
  return isEqual;
}

module.exports ={
  hashPassword,
  comparePassword
}