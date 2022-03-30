import { Request, Response } from 'express';

import { getAllCompanies, getCompanyById, createCompany, updateCompany, deleteCompany } from '../models/companyModel';

import { createBody, updateBody } from '../utilis';

export const get = async (req: Request, res: Response) => {
    try {
        const companies = await getAllCompanies();
        res.status(200).json(companies);
    }
    catch (err) {
        console.error(err);
    }
}

export const getById = async (req: Request, res: Response) => {
    try {
        const company: any = await getCompanyById(parseInt(req.params.id));
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
}

export const create = async (req: Request, res: Response) => {
    try {
        const company: any = createBody(req, res);
        const companies = await createCompany(company);
        res.status(200).json(companies);
    }
    catch (err) {
        console.error(err);
    }
}


export const update = async (req: Request, res: Response) => {
    try {
        const company: any = await getCompanyById(parseInt(req.params.id));

        if (!company) {
            res.status(400).json({ message: `Company ${req.params.id} not found` });
        } else {
            const updated: any = updateBody(req, res, company)
            const companies = await updateCompany(parseInt(req.params.id), updated);
            res.status(200).json(companies);
        }
    }
    catch (err) {
        console.error(err);
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        const company: any = await getCompanyById(parseInt(req.params.id));
        if (!company) {
            res.status(400).json({ message: `Company ${req.params.id} not found` });
        } else {
            await deleteCompany(parseInt(req.params.id))
            res.status(200).json({ message: `Company ${req.params.id} removed` });
        }
    }
    catch (err) {
        console.error(err);
    }
}

