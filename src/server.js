require('dotenv').config()
require('module-alias/register');
const app = require('@app');
const config = require('@config');
const databaseConfig = require('./config/database');

async function startServer() {
  databaseConfig();
  app.listen(config.app.port, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log(`Server Up: port ${config.app.port}`);
  });
}

startServer();