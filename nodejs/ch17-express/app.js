const express = require('express');
const path = require('path');
const app = express();

app.set('port', process.env.PORT || 3000); // 서버에 속성을 심음; port에 3000번
app.use((req, res, next) => {
  console.log('모든 요청에 실행하고싶어요');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/category/:name', (req, res) => {
  res.send(`hello ${req.params.name}`);
});

app.set('/about', (req, res) => {
  res.send('hello express');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
