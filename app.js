const path = require("path");

const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const watsonRoutes = require("./routes/api/watson");

app.use("/api/watson", watsonRoutes);

app.use(express.static(path.join(__dirname, "react-watson", "build")));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "react-watson", "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Watson now running at http://localhost:${port}`);
});
