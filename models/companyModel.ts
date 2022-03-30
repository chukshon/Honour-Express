import { writeFile, readFile } from '../utilis';


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

export const getAllCompanies = async () => {

    return new Promise(function (resolve, reject) {
        let companies: any;
        try {
            companies = readFile()
        }
        catch (err) {
            writeFile([])
            companies = readFile()
        }
        resolve(JSON.parse(companies))
    })
}

export const createCompany = async (company: Company) => {
    let companies: any = await getAllCompanies();
    return new Promise(function (resolve, reject) {
        let newId
        let createdDate = new Date().toISOString();
        let updatedDate = new Date().toISOString();
        if (companies.length === 0) {
            newId = 1
        }
        else {
            newId = Number(companies[companies.length - 1].id) + 1
        }
        const newCompany = { id: newId, createdAt: createdDate, updatedAt: updatedDate, ...company };
        companies.push(newCompany)
        writeFile(companies);
        resolve(newCompany)
    })
}

export const getCompanyById = async (id: number) => {
    let companies: any = await getAllCompanies()
    return new Promise((resolve, reject) => {
        const company = companies.find((p: { id: number }) => p.id === id)
        resolve(company)
    })
}


export const updateCompany = async (id: number, company: Company) => {
    let companies: any = await getAllCompanies();
    return new Promise(function (resolve, reject) {
        let updatedDate = new Date().toISOString();
        const index = companies.findIndex((p: { id: number }) => p.id === id);
        companies[index] = { updatedAt: updatedDate, ...company };
        writeFile(companies);
        resolve(companies[index])
    })
}

export const deleteCompany = async (id: number) => {
    let companies: any = await getAllCompanies()
    return new Promise<void>(function (resolve, reject) {
        companies = companies.filter((p: { id: number }) => p.id !== id)
        writeFile(companies);
        resolve()
    })
}
