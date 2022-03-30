import { readFileSync, writeFileSync } from 'fs';
import { Request, Response } from 'express';

import path from 'path';


interface Company {
    organization: string,
    products: string[],
    marketValue: string,
    address: string,
    ceo: string,
    country: string,
    noOfEmployees: number,
    employees: string[]
}

const Data_Path = path.join(__dirname, './data.json');


export const writeFile = (data: any) => {
    writeFileSync(Data_Path, JSON.stringify(data))
}
export const readFile = () => {
    return readFileSync(Data_Path, { encoding: 'utf8', flag: 'r' })
}


export const createBody = (req: Request, res: Response) => {
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
}


export const updateBody = (req: Request, res: Response, company: any) => {
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
}