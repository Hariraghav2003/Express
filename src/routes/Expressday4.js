const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: true }));

router.get("/senddata", (req, res) => {
  res.send(
    `<form action="/day4/getdata" method="POST">
      <label>Enter the data</label>
      <input type="text" name="data" />
      <input type="submit" value="submit" />
    </form>`
  );
});

router.post("/getdata", (req, res) => {
  console.log("Data from browser:", req.body);
  res.send("<p>Data Submitted!!</p>");
});

module.exports = router;
