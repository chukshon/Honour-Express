"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBody = exports.createBody = exports.readFile = exports.writeFile = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
const Data_Path = path_1.default.join(__dirname, './data.json');
const writeFile = (data) => {
    (0, fs_1.writeFileSync)(Data_Path, JSON.stringify(data));
};
exports.writeFile = writeFile;
const readFile = () => {
    return (0, fs_1.readFileSync)(Data_Path, { encoding: 'utf8', flag: 'r' });
};
exports.readFile = readFile;
const createBody = (req, res) => {
    return {
        organization: req.body.organization,
        products: req.body.products,
        marketValue: req.body.marketValue,
        address: req.body.address,
        ceo: req.body.ceo,
        country: req.body.country,
        noOfEmployees: req.body.noOfEmployees,
        employees: req.body.employees
    };
};
exports.createBody = createBody;
const updateBody = (req, res, company) => {
    return {
        id: company.id,
        organization: req.body.organization || company.organization,
        createdAt: company.createdAt,
        products: req.body.products || company.products,
        marketValue: req.body.marketValue || company.marketValue,
        address: req.body.address || company.address,
        ceo: req.body.ceo || company.ceo,
        country: req.body.country || company.country,
        noOfEmployees: req.body.noOfEmployees || company.noOfEmployees,
        employees: req.body.employees || company.employees,
    };
};
exports.updateBody = updateBody;
