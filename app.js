const http = require("http");

const server = http.createServer((req, res, next) => {
  console.log(req);
  console.log("Listening on port 3000");
});

server.listen(3000);
