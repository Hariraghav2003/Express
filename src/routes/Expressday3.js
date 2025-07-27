const express = require("express");
const router = express.Router();

router.get("/second", (req, res) => {
  res.send("<h1>Second Page</h1>");
});

router.get("/", (req, res) => {
  res.send("<h1>First Page</h1>");
});

module.exports = router;
