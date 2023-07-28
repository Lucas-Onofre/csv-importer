"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesRoutes = void 0;
const express_1 = require("express");
const user_controller_1 = require("../controllers/user-controller");
const upload_1 = __importDefault(require("../middlewares/upload"));
const filesRoutes = (0, express_1.Router)();
exports.filesRoutes = filesRoutes;
filesRoutes.post('/', upload_1.default.single('file'), user_controller_1.importCSVController);
