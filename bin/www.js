"use strict";
const app = require("../app");
//app을 가져와서 app에 넣어준다 .
const PORT = 3000;
//주소
app.listen(PORT,() => {
    console.log("서버 가동");
} );

