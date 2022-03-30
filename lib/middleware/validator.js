"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPresence = exports.checkTypes = void 0;
const checkTypes = (req, res, next) => {
    const organization = req.body.organization;
    const noOfEmployees = req.body.noOfEmployees;
    const marketValue = req.body.marketValue;
    const address = req.body.address;
    const ceo = req.body.ceo;
    const country = req.body.country;
    const employees = req.body.employees;
    const product = req.body.products;
    let error = [];
    if (typeof (noOfEmployees) !== 'number') {
        error.push("noOfEmployees should be of type number");
    }
    if (!Array.isArray(product)) {
        error.push("products should be an array");
    }
    if (typeof (organization) !== 'string') {
        error.push("organization should be of type string");
    }
    if (typeof (marketValue) !== 'string') {
        error.push("marketValue should be of  type string");
    }
    if (typeof (address) !== 'string') {
        error.push("address should be of type string");
    }
    if (typeof (ceo) !== 'string') {
        error.push("ceo should be of type string");
    }
    if (typeof (country) !== 'string') {
        error.push("country should be of type string");
    }
    if (typeof (country) !== 'string') {
        error.push("country should be of type string");
    }
    if (!Array.isArray(employees)) {
        error.push("employees should be an array");
    }
    if (error.length > 0) {
        return res.status(400).json({
            message: error.map(e => {
                return e;
            })
        });
    }
    next();
};
exports.checkTypes = checkTypes;
const checkPresence = (req, res, next) => {
    let error = [];
    if (!req.body.organization) {
        error.push("organization is required");
    }
    if (!req.body.products) {
        error.push("Product is required");
    }
    if (!req.body.noOfEmployees) {
        error.push("noOfEmployees is required");
    }
    if (!req.body.marketValue) {
        error.push("marketValue is required");
    }
    if (!req.body.ceo) {
        error.push("ceo is required");
    }
    if (!req.body.country) {
        error.push("country is required");
    }
    if (!req.body.employees) {
        error.push("employee is required");
    }
    if (error.length > 0) {
        return res.status(400).json({
            message: error.map(e => {
                return e;
            })
        });
    }
    next();
};
exports.checkPresence = checkPresence;
