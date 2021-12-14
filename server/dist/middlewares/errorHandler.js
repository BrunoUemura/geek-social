"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var CustomError_1 = require("../errors/CustomError");
var errorHandler = function (err, req, res, next) {
    if (err instanceof CustomError_1.CustomError) {
        return res.status(err.statusCode).send({ errors: err.serializeErrors() });
    }
    res.status(500).send({
        errors: [{ message: 'Something went wrong' }],
    });
};
exports.errorHandler = errorHandler;
