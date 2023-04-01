"use strict";

const home = (req, res) =>{
    res.render("home/index");
};
const login =  (req, res)=>{
    res.render("home/login");
};

module.exports ={
    home,
    //hello : hello
    // key : value
    //와 같다고봐
    login,
    // login : login
    // key : value
    //와 같다고봐
};
//밖으로 내보낸다.