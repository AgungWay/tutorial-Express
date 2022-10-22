const http = require("http");

const port = 5000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end(`<h1>Welcome back too my channel</h1>
    <a href="/about">ABOUT</a>`);
  }
  if (req.url == "/about") {
    res.end(`<h1>Disini adalah halaman about</h1>
    <a href="/">Kembali</a>`);
  }
  console.log(req);
  res.end();
});

server.listen(`${port}`);
console.log(`listening to port:${port} , press Ctrl + C to exit !`);

const _ = require("lodash");
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
