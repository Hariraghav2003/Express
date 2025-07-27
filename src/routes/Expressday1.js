const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Express Works!!");
  next();
});

router.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

router.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

router.use((req, res, next) => {
  console.log("Middleware 3");
  next();
});

router.use((req, res) => {
  console.log("Middleware 4");
  res.send("<h1>Hello Express !!</h1>");
});

module.exports = router;
