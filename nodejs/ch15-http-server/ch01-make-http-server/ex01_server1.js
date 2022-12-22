const http = require('http');

const server = http
  .createServer((req, res) => {
    // 여기에 어떻게 응답할지 적습니다.
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node!</h1>');
    res.write('<p>Hello server</p>');
    res.end('<p>Bye</p>');
  })
  .listen(8080);

server.on('listening', () => {
  console.log('8080 포트에서 서버 대기 중입니다.');
});
server.on('error', (err) => {
  console.log(err);
});
