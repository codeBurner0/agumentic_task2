"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var host = "127.0.0.1";
var PORT = 5000;
app.get('/', function (req, res) {
    res.status(200).send("hello world");
});
app.listen(PORT, host, function () {
    console.log("server is starter at https//localhost:5000");
});
