const express = require("express");
const router = express.Router();

const todo = [];

router.post("/todo", (req, res) => {
  const { title, description } = req.body;
  const todos = { title, description };
  todo.push(todos);
  console.log(todos);
  res.status(201).send("Item added");
});

router.get("/todo", (req, res) => {
  res.json(todo);
});

module.exports = router;
