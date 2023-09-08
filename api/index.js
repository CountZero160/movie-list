const express = require("express");
const app = express();
const knex = require("knex");
const port = 8080;

app.use(express.json());
// app.use(knex);

app.listen(port, () => console.log(`We are listening on ${port}`));

app.get("/", (req, res) => {
  res.status(200).send("We are up and running");
});
