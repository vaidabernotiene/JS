const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  fs.readFile("index.html", (err, data) => {
    // res.statusCode = 200;
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(data)
    return res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
