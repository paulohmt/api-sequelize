require('dotenv').config(); // Carrega as variáveis de ambiente do arquivo .env
const { Sequelize } = require('sequelize');

const env = process.env.NODE_ENV || 'development';

let username, password, database, host, dialect;

if (env === 'development') {
  username = process.env.DB_USERNAME;
  password = process.env.DB_PASSWORD;
  port = process.env.DB_PORT;
  database = process.env.DB_DATABASE;
  host = process.env.DB_HOST;
  dialect = process.env.DB_DIALECT;
} else if (env === 'test') {
  username = process.env.DB_TEST_USERNAME;
  password = process.env.DB_TEST_PASSWORD;
  database = process.env.DB_TEST_DATABASE;
  host = process.env.DB_TEST_HOST;
  dialect = process.env.DB_TEST_DIALECT;
} else if (env === 'production') {
  username = process.env.DB_PROD_USERNAME;
  password = process.env.DB_PROD_PASSWORD;
  database = process.env.DB_PROD_DATABASE;
  host = process.env.DB_PROD_HOST;
  dialect = process.env.DB_PROD_DIALECT;
}

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

module.exports = sequelize;