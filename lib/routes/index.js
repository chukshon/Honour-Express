"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
let router = express_1.default.Router();
const companyController_1 = require("../controllers/companyController");
/* GET home page. */
const validator_1 = require("../middleware/validator");
const validator_2 = require("../middleware/validator");
router.get('/companies', companyController_1.get);
router.get('/companies/:id', companyController_1.getById);
router.post('/companies', validator_2.checkPresence, validator_1.checkTypes, companyController_1.create);
router.put('/companies/:id', companyController_1.update);
router.delete('/companies/:id', companyController_1.remove);
exports.default = router;
