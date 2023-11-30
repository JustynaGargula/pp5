import { Customer } from "./customer";
import { Invoice } from "./invoice";

export class Supplier extends Customer{

    constructor(accountNumber: string){
        super();
        this.accountNumber = accountNumber;
    }
    accountNumber: string = ''
    invoices: Invoice[] = [];

}
