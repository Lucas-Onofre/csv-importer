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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.importCSVService = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
const user_repository_1 = require("../repositories/user-repository");
const errors_1 = require("../errors");
const importCSVService = (file) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (file.mimetype !== 'text/csv') {
            throw new errors_1.BadRequestError('Invalid file.', 'Verify your file and try again.');
        }
        const users = yield loadCSVUsers(file);
        if (!users)
            return;
        return yield user_repository_1.UserRepository.bulkCreateUser(users);
    }
    catch (error) {
        throw new errors_1.BadRequestError('Invalid file.', 'Verify your file and try again.');
    }
});
exports.importCSVService = importCSVService;
const loadCSVUsers = (file) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const stream = fs_1.default.createReadStream(file.path);
        const parseFile = (0, csv_parser_1.default)();
        stream.pipe(parseFile);
        const users = [];
        parseFile
            .on('data', (line) => __awaiter(void 0, void 0, void 0, function* () {
            const { name, city, country, favorite_sport } = line;
            users.push({ name, city, country, favorite_sport });
        }))
            .on('end', () => {
            resolve(users);
        })
            .on('error', (err) => {
            reject(err);
        });
    });
});
