const express = require("express");
const app = express();

app.use(express.static("public"));

// Create a user
app.get("/account/create/:name/:email/:password", (req, res) => {
  res.send({
    name: req.params.name,
    email: req.params.email,
    password: req.params.password,
  });
});

// Login a user
app.get("/account/login/:email/:password", (req, res) => {
  res.send({
    email: req.params.email,
    password: req.params.password,
  });
});

// All accounts
app.get("/account/all", (req, res) => {
  res.send({
    name: "peter",
    email: "peter@test.com",
    password: "secret",
  });
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
