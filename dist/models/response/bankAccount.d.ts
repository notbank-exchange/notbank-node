import { Bank } from "./bank.js";
export interface BankAccount {
    id: string;
    country: string;
    bank: Bank;
    number: string;
    kind: string;
    currency: string;
    agency?: string;
    dv?: string;
    province?: string;
    pix_type?: string;
}
export interface BankAccounts {
    total: number;
    data: BankAccount[];
}
