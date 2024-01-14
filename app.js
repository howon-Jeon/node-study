const helmet = require('helmet');
const express = require('express');
// node_modules에서 express를 꺼내온 것
// 서버를 만들기위한 것을 변수에 담음

const app = express();
// 함수를 app 변수에 저장
app.use(express.json());
app.use(express.urlencoded()); // post 방식 서버에서 활용할 수 있음
const mainRouter = require('./router/mainRouter');
app.use('/',mainRouter)
// 미들웨어를 통해 규칙을 정해 놓음 왜? 다양한 라우터 관리로 서버가 커져도 운영
app.use(helmet());
// 사이트 ---> 요청 ---middleware()--> Node.jS
// 미들웨어는 요청 - 응답 사이 길목에 위치한 관문소와 같은 느낌
// 아주 일반적인 해킹을 방지하려면 helmet이란 도구를 내려받고, 미들웨어에 세팅해줘야함.

const ejs = require("ejs");
//npm install ejs

app.set('view engine', 'ejs'); //그림파일 확장자명이 ejs 
// 그림파일 보여줄 때 어떤 view 도구 사용할지 ejs
app.set('views','./views');
// 내가 만든 views 폴더에 있다 표시
app.use('/public',express.static(__dirname +'/public'));
// public 폴더가 app.js 가 어디 있는지/ public에서 불러옴
// express.static html 파일에서 이미지 파일은 전부 여기 서버에 있다 알려줌

app.listen(3000, function(req,res){
        console.log("서버가 실행되고 있다!")
})
// 컴퓨터 키는 스위치 부분, 3000번 방을 서버로 쓸 것이다.
