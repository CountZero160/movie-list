const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

const knex = require("knex")(
  require("./knexfile.js")[process.env.NODE_ENV || "development"]
);

app.use(cors());
app.use(express.json());

app.listen(port, () => console.log(`We are listening on ${port}`));

app.get("/", (req, res) => {
  res.status(200).send("We are up and running");
});

app.get("/movies", (req, res) => {
  knex("movies")
    .select("*")
    .then((movies) => {
      res.send(movies);
    });
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;

  knex("movies")
    .select("*")
    .where({ id })
    .then((movie) => {
      if (movie.toString() !== "") {
        res.send(movie);
      } else {
        res.status(404).json({
          success: false,
          message: "Your movie wasn't found.",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Your movie wasn't found.",
      });
    });
});

app.delete("/movies", (req, res) => {
  const { id } = req.body;

  knex("movies")
    .where({ id })
    .del()
    .then(res.status(200).send(`Movie ID: ${id} deleted`))
    .catch((error) => {
      console.log(error);
      res.send(500).send(`Unable to delete ${id}.`);
    });
});

app.post("/movies", (req, res) => {
  const { id } = req.body;

  knex("movies")
    .insert(req.body)
    .then((newMovie) => {
      res.status(201).send(`${req.body.title} has been added to the database.`);
    });
});

app.patch("/movies", (req, res) => {
  const { id, title } = req.body;

  knex("movies")
    .where({ id })
    .update({ title })
    .then((updates) => {
      if (updates > 0) {
        res.status(200).send(`${title} has been updated.`);
      } else res.status(404).send(`${title} not found, could not update.`);
    })
    .catch((error) => {
      console.log(error);
      res.send(500).send("Unable to make update.");
    });
});
