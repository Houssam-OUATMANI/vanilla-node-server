const fs = require("fs");
const http = require("http");

const server = http.createServer((request, response) => {
  switch (request.url) {
    case "/": {
      fs.appendFile(
        "./home.txt",
        JSON.stringify(request.url),
        (err) => err && console.log(err)
      );
      fs.readFile("./home.html", (err, home) => {
        err && console.log(err);
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(home);
        response.end(() => console.log("Response Ended !"));
      });
      break;
    }
    case "/other":
      {
        fs.appendFile(
          "./other.txt",
          JSON.stringify(request.url),
          (err) => err && console.log(err)
        );
        fs.readFile("./other.html", (err, other) => {
          err && console.log(err);
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(other);
          response.end(() => console.log("Response Ended !"));
        });
      }
      break;
  }
});

server.listen(8000);
