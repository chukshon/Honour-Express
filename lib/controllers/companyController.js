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
exports.remove = exports.update = exports.create = exports.getById = exports.get = void 0;
const companyModel_1 = require("../models/companyModel");
const utilis_1 = require("../utilis");
const get = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const companies = yield (0, companyModel_1.getAllCompanies)();
        res.status(200).json(companies);
    }
    catch (err) {
        console.error(err);
    }
});
exports.get = get;
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, companyModel_1.getCompanyById)(parseInt(req.params.id));
        if (!company) {
            res.status(400).json({ message: `Company ${req.params.id} not found` });
        }
        else {
            res.status(200).json(company);
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.getById = getById;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = (0, utilis_1.createBody)(req, res);
        const companies = yield (0, companyModel_1.createCompany)(company);
        res.status(200).json(companies);
    }
    catch (err) {
        console.error(err);
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, companyModel_1.getCompanyById)(parseInt(req.params.id));
        if (!company) {
            res.status(400).json({ message: `Company ${req.params.id} not found` });
        }
        else {
            const updated = (0, utilis_1.updateBody)(req, res, company);
            const companies = yield (0, companyModel_1.updateCompany)(parseInt(req.params.id), updated);
            res.status(200).json(companies);
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.update = update;
const remove = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const company = yield (0, companyModel_1.getCompanyById)(parseInt(req.params.id));
        if (!company) {
            res.status(400).json({ message: `Company ${req.params.id} not found` });
        }
        else {
            yield (0, companyModel_1.deleteCompany)(parseInt(req.params.id));
            res.status(200).json({ message: `Company ${req.params.id} removed` });
        }
    }
    catch (err) {
        console.error(err);
    }
});
exports.remove = remove;
