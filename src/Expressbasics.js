const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const fs = require('fs');
const marked = require("marked");
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Importing routes
const day1 = require("./routes/Expressday1");
const day2 = require("./routes/Expressday2");
const day3 = require("./routes/Expressday3");
const day4 = require("./routes/Expressday4");
const day5 = require("./routes/Expressday5");
const day6 = require("./routes/Expressday6");
const day7 = require("./routes/Expressday7");

// Using routes with base paths
app.get('/', (req, res) => {
  const readmePath = path.join(__dirname, 'README.basic.md'); // Adjust path if README is elsewhere

  fs.readFile(readmePath, 'utf8', (err, data) => {
    if (err) return res.status(500).send('Could not load README file');

    const html = marked.parse(data);
    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Project README</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; max-width: 900px; margin: auto; }
          pre, code { background: #f4f4f4; padding: 5px; border-radius: 5px; }
          h1, h2, h3 { color: #2c3e50; }
        </style>
      </head>
      <body>
        ${html}
      </body>
      </html>
    `);
  });
});

app.use("/day1", day1);
app.use("/day2", day2);
app.use("/day3", day3);
app.use("/day4", day4);
app.use("/day5", day5);
app.use("/day6", day6);
app.use("/day7", day7);

// 404 Page
app.use((req, res) => {
  res.status(404).send("<h1>404 Page Not Found</h1>");
});

// Listen on single port
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
