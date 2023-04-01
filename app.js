"use strict";

//모듈
const express = require("express");
const app = express();


//라우팅
const home = require("./routes/home");
//상대 경로 의 routes 폴더 안에 있는 index.js 를 받아와서 home 에 저장 시킨다
// "/" or "/login"

app.set("views", "./views");
//파일 불러오기위해
app.set("view engine","ejs");
//파일 불러오기위해

app.use("/", home);// use -> 미들 웨어를 등록해주는 메서드.
//"/"이 루트 경로 로 오게 된다면  home 을 불러오게 된다.

module.exports = app;
//app을 내보낸다 .


