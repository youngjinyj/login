"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
//ctrl 이라는 변수안에 home.ctrl 안에 있는 소스들을 넣어준다 .
router.get("/", ctrl.home);
                // ctrl 안에 있는 hello를 불러준다.
router.get("/login", ctrl.login);
                // ctrl 안에 있는 login을 불러준다.
module.exports =router;

