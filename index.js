const http = require("http");
const jason = require("./new");
const data = JSON.stringify(jason);
const server = http.createServer((req, res) => {
  if (req.url === "/html") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1>What is Node JS</h1>");
    res.write(
      "<p>As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications. In the following example, many connections can be handled concurrently. Each connection is a small program that runs on the server.</p>"
    );
    res.end();
  } else if (req.url === "/json") {
    res.write(data);
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
