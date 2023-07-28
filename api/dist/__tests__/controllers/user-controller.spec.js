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
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const supertest_1 = __importDefault(require("supertest"));
const __1 = require("../..");
const errorTxtPath = path_1.default.resolve(__dirname, '..', '__mocks__', 'error.txt');
const txtError = fs_1.default.readFileSync(errorTxtPath);
afterAll(() => {
    close();
});
describe('userController', () => {
    it('should return a list of users', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.app).get('/api/users').query({
            query: '',
        });
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    }));
    it('should return an error when the file extension is invalid', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(__1.app)
            .post('/api/files')
            .attach('file', txtError);
        expect(response.status).toBe(400);
    }));
});
