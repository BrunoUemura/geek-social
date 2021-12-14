"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
var http_status_codes_1 = require("http-status-codes");
var CustomError_1 = require("./CustomError");
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
        Object.setPrototypeOf(_this, NotFoundError.prototype);
        return _this;
    }
    NotFoundError.prototype.serializeErrors = function () {
        return [{ status: this.statusCode, message: this.message }];
    };
    return NotFoundError;
}(CustomError_1.CustomError));
exports.NotFoundError = NotFoundError;
