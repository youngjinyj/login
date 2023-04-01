"usw strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.render("home/index");
    //파일 불러오기
});
router.get("/login", (req, res)=>{
    res.render("home/login");
    //파일 불러오기
});
// (req, res)=>{
//     res.render("home/login");
// }); ==> 이 부분이 컨트롤러 그러니까 라우터의 기능이라고
module.exports =router;
//외부에서 라우터를 사용할수있도록 만든다

//라우터는 이 도메인으로 들어오면 클라이언트들에게 연결 해주는 부분
