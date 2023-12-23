import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { Customer } from '../../models/customer';
import { CustomerListElementComponent } from "../customer-list-element/customer-list-element.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-customer-list',
    standalone: true,
    templateUrl: './customer-list.component.html',
    styleUrl: './customer-list.component.scss',
    imports: [CommonModule, CustomerListElementComponent]
})
export class CustomerListComponent {
  constructor( private dataService: DataServiceService, private router: Router){  }
  customerList: Customer[] = new Array
  ngOnInit(){
    this.customerList = this.dataService.getCustomer();
  }

  ngOnDestroy(){
    console.log("Zamykam komponent");
  }

  goToForm(){
    this.router.navigate(['/invoice/customer/form'])
  }

  deleteCustomer(customer: Customer){
     console.log("Kasujemy klienta o NIPie ", customer.nip)
     this.dataService.deleteCustomer(customer.nip);
     this.customerList = this.dataService.getCustomer();
  }

}
