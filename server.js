
const http = require('http');
const express = require('express');
const cors = require('cors');
// 'routes' 폴더에서 'items' 가져오기
const itemsRouter = require('./routes/items');

// create new app
const app = express();
app.use(express.json());
// 모든 경로 정의 전에 사용
// 아래 url이 api 엔드포인트에 액세스하도록 허용
// url(http://localhost:8100)
// api를 호출하는 api 애플리케이션 url
app.use(cors({origin: 'http://localhost:8100'}));

/* 
 ->  localhost:3000/items/(객체 배열 반환)
 ->  localhost:3000/items/:id(단일 객체 반환)
*/
app.use('/items', itemsRouter);

// api에 대한 기본 url
app.use('/', function(req, res) {
    res.send('hello world!');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Hello World` ');
console.debug('Hello World` ' + port);
console.debug('Hello World` '+ 'dkjfkdjk`');


