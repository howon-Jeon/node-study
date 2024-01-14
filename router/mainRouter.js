const express = require('express');
const router = express.Router();

 // post 방식 서버에서 활용할 수 있음
// router 폴더 주소만 이용하는 코드만 배치
router.get("/", function(req,res){
    res.render('index',{title:"EJS 메인페이지"}); //그림파일을 전달해 줄 때 데이터까지 같이 전달

    /*let page = req.query.page;
    console.log("[QUERY]");
    console.log(page);*/

    res.send({"Key":"Value"}); //문자열,숫자 전달해줄때
})
// get방식 api 만든 것, 어떤 것을 보여줄지 함수안에 작성, 즉 주소를 만드는 도구

router.get("/about",function(req,res){
    res.send('About Page')
})
//ex)회사소개 페이지, 서버를 껐다 켜야 적용

router.post("/postapi", function(req,res){
    let body = req.body;
    console.log(body);
    res.send('POST API')
})
// post API는 코드단에서만 사용할 수 있음

module.exports = router