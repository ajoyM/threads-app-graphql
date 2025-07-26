"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var PORT = process.env.PORT || 7000;
var app = (0, express_1.default)();
app.get('/', function (req, res) {
    res.json({
        message: 'hello world'
    });
});
app.listen(PORT, function () {
    console.log("Server is running on PORT ".concat(PORT));
});
