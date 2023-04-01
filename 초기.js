const express = require("express");
const app = express();
app.get("/", (req, res) =>{
    res.render("home/index")
    //파일 불러오기
});
app.get("/login", (req, res)=>{
    res.send("여기는 로그인 화면입니다.");
});
app.listen(3000,() => {
    console.log("서버 가동");
} );
