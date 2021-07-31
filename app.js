require("dotenv").config();

const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser"),
  DEFAULT_BODY_SIZE_LIMIT = 1024 * 1024 * 10,
  DEFAULT_PARAMETER_LIMIT = 10000;

const bodyParserJsonConfig = () => ({
  parameterLimit: DEFAULT_PARAMETER_LIMIT,
  limit: DEFAULT_BODY_SIZE_LIMIT,
});

const ask = require("./controller").ask;

app.use(bodyParser.json(bodyParserJsonConfig()));

app.get("/", (req, res) => res.send("<h1>Hello from Watson!</h1>"));
app.post("/ask", ask);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
