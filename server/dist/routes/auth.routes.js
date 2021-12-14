"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
var express_1 = require("express");
var express_validator_1 = require("express-validator");
var AuthController_1 = require("../controllers/AuthController");
exports.auth = (0, express_1.Router)();
var registrationValidation = [
    (0, express_validator_1.body)('username').notEmpty(),
    (0, express_validator_1.body)('email').isEmail().withMessage('Email must be valid'),
    (0, express_validator_1.body)('password').trim().isLength({ min: 4, max: 20 }),
];
var loginValidation = [
    (0, express_validator_1.body)('email').isEmail().withMessage('Email must be valid'),
];
var logoutValidation = [(0, express_validator_1.body)('token').isString()];
exports.auth
    .post('/register', registrationValidation, AuthController_1.AuthController.registerUser)
    .post('/login', loginValidation, AuthController_1.AuthController.loginUser);
