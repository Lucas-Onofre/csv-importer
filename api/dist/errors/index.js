"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.BadRequestError = exports.InternalServerError = exports.BaseError = void 0;
class BaseError extends Error {
    constructor({ message, key, action, statusCode }) {
        super(message);
        this.message = message || 'An error occurred';
        this.key = key || 'unknown_error';
        this.action = action || 'Try again later...';
        this.statusCode = statusCode || 400;
    }
}
exports.BaseError = BaseError;
class InternalServerError extends BaseError {
    constructor(message, action) {
        super({
            message: message || 'An internal server error occurred',
            key: 'internal_server_error',
            action: action || 'Try again later...',
            statusCode: 500,
        });
    }
}
exports.InternalServerError = InternalServerError;
class BadRequestError extends BaseError {
    constructor(message, action) {
        super({
            message: message || 'You sent a malformed request',
            key: 'bad_request',
            action: action || 'Check if the request is well formed and try again',
            statusCode: 400,
        });
    }
}
exports.BadRequestError = BadRequestError;
class NotFoundError extends BaseError {
    constructor(message, action) {
        super({
            message: message || 'You tried to access a resource that does not exist',
            key: 'not_found',
            action: action || 'Check if the resource exists and try again',
            statusCode: 404,
        });
    }
}
exports.NotFoundError = NotFoundError;
