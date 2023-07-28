"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
const errors_1 = require("../errors");
const errorMiddleware = (error, request, response, next) => {
    throw new errors_1.InternalServerError(error.message, 'Try again later...');
};
exports.errorMiddleware = errorMiddleware;
