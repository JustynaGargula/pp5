import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  customerList: Customer[] = new Array
  constructor() { }
  addCustomer(customer: Customer){
    this.customerList.push(customer)
  }
  getCustomer(): Customer[]{
    return this.customerList
  }
  deleteCustomer(customerNip: string){
    this.customerList = this.customerList.filter((customer: Customer)=>{return customer.nip!=customerNip})
  }
}
