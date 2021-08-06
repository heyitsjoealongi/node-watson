const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const watsonRoutes = require("./watson");

app.use("/", watsonRoutes);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log("Server listening on port", port);
});
