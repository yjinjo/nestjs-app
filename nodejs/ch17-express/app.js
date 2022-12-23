const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');

app.set('port', process.env.PORT || 3000); // 서버에 속성을 심음; port에 3000번

app.use(morgan('dev'));
app.use(cookieParser('zerochopassword'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  req.body;
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  res.send('hello express!');
});

app.use((req, res, next) => {
  res.status(404).send('404 Not Found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(200).send('에러!!!!');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
