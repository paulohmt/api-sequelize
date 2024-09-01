const { Sequelize } = require("sequelize");
const config = require("./config/config.json");

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

// Teste a conexão
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão estabelecida com sucesso.");
  })
  .catch((err) => {
    console.error("Erro ao conectar ao banco de dados:", err);
  });
