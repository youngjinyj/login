const { log } = require("console");
const http = require("http");
const app = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html; charset=UTF-8"});
    if(req.url === '/'){
        res.end("여기는 http 루트입니다.");
    }else if(req.url ===  "/login"){
        res.end("여기는 로그인 화면입니다.");
    }
});
app.listen(3001, ()=>{
    console.log("http로 가동된 서버입니다.")
});