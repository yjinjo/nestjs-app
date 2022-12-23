const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000); // 서버에 속성을 심음; port에 3000번
app.get('/', (req, res) => {
  res.send('hello express');
});

app.post('/', (req, res) => {
  res.send('hello express');
});

app.set('/about', (req, res) => {
  res.send('hello express');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
