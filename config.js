require('env2')('./config.env');

module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET,
  DATABASE_URL: process.env.DATABASE_URL,
  TEST_URL: process.env.TEST_URL
};
