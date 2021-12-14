"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.List = void 0;
require("../database");
var mongoose_1 = __importDefault(require("mongoose"));
var ListSchema = new mongoose_1.default.Schema({
    userId: {
        type: String,
        required: true,
    },
    listName: {
        type: String,
        max: 20,
    },
    category: {
        type: String,
    },
    listItems: [
        {
            title: {
                type: String,
            },
            season: {
                type: Number,
                min: 0,
            },
            episode: {
                type: Number,
                min: 0,
            },
        },
    ],
}, {
    timestamps: true,
});
exports.List = mongoose_1.default.model('List', ListSchema);
