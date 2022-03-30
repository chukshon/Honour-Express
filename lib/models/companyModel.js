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
exports.deleteCompany = exports.updateCompany = exports.getCompanyById = exports.createCompany = exports.getAllCompanies = void 0;
const utilis_1 = require("../utilis");
const getAllCompanies = () => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise(function (resolve, reject) {
        let companies;
        try {
            companies = (0, utilis_1.readFile)();
        }
        catch (err) {
            (0, utilis_1.writeFile)([]);
            companies = (0, utilis_1.readFile)();
        }
        resolve(JSON.parse(companies));
    });
});
exports.getAllCompanies = getAllCompanies;
const createCompany = (company) => __awaiter(void 0, void 0, void 0, function* () {
    let companies = yield (0, exports.getAllCompanies)();
    return new Promise(function (resolve, reject) {
        let newId;
        let createdDate = new Date().toISOString();
        let updatedDate = new Date().toISOString();
        if (companies.length === 0) {
            newId = 1;
        }
        else {
            newId = Number(companies[companies.length - 1].id) + 1;
        }
        const newCompany = Object.assign({ id: newId, createdAt: createdDate, updatedAt: updatedDate }, company);
        companies.push(newCompany);
        (0, utilis_1.writeFile)(companies);
        resolve(newCompany);
    });
});
exports.createCompany = createCompany;
const getCompanyById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let companies = yield (0, exports.getAllCompanies)();
    return new Promise((resolve, reject) => {
        const company = companies.find((p) => p.id === id);
        resolve(company);
    });
});
exports.getCompanyById = getCompanyById;
const updateCompany = (id, company) => __awaiter(void 0, void 0, void 0, function* () {
    let companies = yield (0, exports.getAllCompanies)();
    return new Promise(function (resolve, reject) {
        let updatedDate = new Date().toISOString();
        const index = companies.findIndex((p) => p.id === id);
        companies[index] = Object.assign({ updatedAt: updatedDate }, company);
        (0, utilis_1.writeFile)(companies);
        resolve(companies[index]);
    });
});
exports.updateCompany = updateCompany;
const deleteCompany = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let companies = yield (0, exports.getAllCompanies)();
    return new Promise(function (resolve, reject) {
        companies = companies.filter((p) => p.id !== id);
        (0, utilis_1.writeFile)(companies);
        resolve();
    });
});
exports.deleteCompany = deleteCompany;
