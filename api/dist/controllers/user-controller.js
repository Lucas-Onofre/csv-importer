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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUsersController = exports.importCSVController = void 0;
const import_csv_service_1 = require("../services/import-csv-service");
const list_users_service_1 = require("../services/list-users-service");
const importCSVController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { file } = req;
        const csv = yield (0, import_csv_service_1.importCSVService)(file);
        res.status(201).json({
            message: 'file imported successfully',
            data: csv,
        });
    }
    catch (error) {
        res.status(error.statusCode).json(error);
    }
});
exports.importCSVController = importCSVController;
const listUsersController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { query } = req.query;
        const users = yield (0, list_users_service_1.listUsersService)(query);
        return res.json(users);
    }
    catch (error) {
        return res.status(error.statusCode).json(error);
    }
});
exports.listUsersController = listUsersController;
