import express, { Application, Request, Response, NextFunction } from 'express';
let router = express.Router();

import { get, create, update, getById, remove } from '../controllers/companyController'


import { checkTypes } from '../middleware/validator'
import { checkPresence } from '../middleware/validator'


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express', name: 'Chukwuka Honour' });
});

router.get('/companies', get)

router.get('/companies/:id', getById)

router.post('/companies', checkPresence, checkTypes, create)

router.put('/companies/:id', update)

router.delete('/companies/:id', remove)



export default router;
