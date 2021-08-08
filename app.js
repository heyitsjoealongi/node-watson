const path = require("path");

const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const watsonRoutes = require("./watson");

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "react-watson", "build", "index.html"));
});

app.use("/", watsonRoutes);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Node Watson now running at http://localhost:${port}`);
});
