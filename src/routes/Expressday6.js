const express = require("express");
const router = express.Router();
const htmlimport = require("../Expresshtml/Getdata");
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: true }));
router.use(htmlimport);

module.exports = router;
