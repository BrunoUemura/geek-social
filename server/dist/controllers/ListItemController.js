"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListItemController = void 0;
var ListItemService_1 = require("../services/ListItemService");
var ListItemController = /** @class */ (function () {
    function ListItemController() {
    }
    ListItemController.create = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, _a, title, season, episode, service, result, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        _a = req.body, title = _a.title, season = _a.season, episode = _a.episode;
                        service = new ListItemService_1.ListItemService();
                        return [4 /*yield*/, service.create(id, { title: title, season: season, episode: episode })];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, res.json(result)];
                    case 2:
                        error_1 = _b.sent();
                        next(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ListItemController.update = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, itemId, _b, title, season, episode, service, result, error_2;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        _a = req.params, id = _a.id, itemId = _a.itemId;
                        _b = req.body, title = _b.title, season = _b.season, episode = _b.episode;
                        service = new ListItemService_1.ListItemService();
                        return [4 /*yield*/, service.update(id, {
                                itemId: itemId,
                                title: title,
                                season: season,
                                episode: episode,
                            })];
                    case 1:
                        result = _c.sent();
                        return [2 /*return*/, res.json(result)];
                    case 2:
                        error_2 = _c.sent();
                        next(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ListItemController.delete = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, itemId, service, result, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = req.params, id = _a.id, itemId = _a.itemId;
                        service = new ListItemService_1.ListItemService();
                        return [4 /*yield*/, service.delete(id, itemId)];
                    case 1:
                        result = _b.sent();
                        return [2 /*return*/, res.json(result)];
                    case 2:
                        error_3 = _b.sent();
                        next(error_3);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ListItemController;
}());
exports.ListItemController = ListItemController;
