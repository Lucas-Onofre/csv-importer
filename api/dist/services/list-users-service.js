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
exports.listUsersService = void 0;
const user_repository_1 = require("../repositories/user-repository");
const errors_1 = require("../errors");
const listUsersService = (query = '') => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!query) {
            return [];
        }
        return yield user_repository_1.UserRepository.listUsers(query);
    }
    catch (error) {
        throw new errors_1.BaseError({
            message: 'Ocurred an error while listing users.',
            statusCode: 400,
        });
    }
});
exports.listUsersService = listUsersService;
