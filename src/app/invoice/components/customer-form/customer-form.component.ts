import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Customer } from '../../models/customer';
import { DataServiceService } from '../../services/data-service.service';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-form',
  standalone: false,
  templateUrl: './customer-form.component.html',
  styleUrl: './customer-form.component.scss'
})
export class CustomerFormComponent {
  constructor (private dataService: DataServiceService, private router: Router){
    dataService
    router
  }
  customer: Customer = new Customer;
  onSubmit(form: NgForm) {
    console.log(form.value);
    this.dataService.addCustomer(this.customer)
    this.router.navigate(['/invoice/customer/list'])
  }

}
