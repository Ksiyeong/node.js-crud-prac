// cjs 스타일
const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello node.js');
    res.end();
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});