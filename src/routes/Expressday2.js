const express = require("express");
const router = express.Router();

router.get("/html", (req, res) => {
  res.send("<h1>Hello Express !! </h1>");
});

router.get("/json", (req, res) => {
  res.send({ some: "Json" });
});

module.exports = router;
