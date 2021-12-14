"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var app_1 = require("./app");
var PORT = process.env.PORT || 4000;
app_1.app.listen(PORT, function () {
    console.log("Server running on port ".concat(PORT));
});
