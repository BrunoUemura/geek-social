"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = __importDefault(require("express"));
var auth_routes_1 = require("./auth.routes");
var users_routes_1 = require("./users.routes");
var lists_routes_1 = require("./lists.routes");
exports.routes = (0, express_1.default)();
exports.routes.use('/api/v1', auth_routes_1.auth, users_routes_1.users, lists_routes_1.lists);
