const express = require("express");
const router = express.Router();
const datahandlling = require("../Multipleroutes/Datahandlling");
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: true }));
router.use(datahandlling);

// This will be used only within /day5 if nothing else matches
router.use((req, res) => {
  res.status(404).send("<h1>404 Page Not Found (day5)</h1>");
});

module.exports = router;
