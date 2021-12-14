"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
require("../database");
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 6,
    },
    profilePicture: {
        type: String,
        default: '',
    },
    coverPicture: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
        max: 50,
    },
}, {
    timestamps: true,
});
exports.User = mongoose_1.default.model('User', UserSchema);
