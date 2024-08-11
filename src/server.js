const express = require("express");
const app = express();
const router = require("./router/router");
const sequelize = require("./config/config");

app.use(express.json());
app.use("/api/user", router);

app.get("/healthcheck", (req, res) => {
  return res.status(200).json({
    msg: "Estamos funcionando",
    alive: true,
  });
});

sequelize
  .authenticate()
  .then(async () => {
    console.log("Conexão estabelecida com sucesso");
    await sequelize.sync();
  })
  .then(async () => {
    app.listen(8080, () => {
      console.log("servidor rodando");
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar com o banco de dados: ", error);
  });
