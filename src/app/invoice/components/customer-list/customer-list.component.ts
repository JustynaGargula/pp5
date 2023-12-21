import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServiceService } from '../../services/data-service.service';
import { Customer } from '../../models/customer';
import { CustomerListElementComponent } from "../customer-list-element/customer-list-element.component";

@Component({
    selector: 'app-customer-list',
    standalone: true,
    templateUrl: './customer-list.component.html',
    styleUrl: './customer-list.component.scss',
    imports: [CommonModule, CustomerListElementComponent]
})
export class CustomerListComponent {
  constructor( private dataService: DataServiceService){}
  customerList: Customer[] = new Array
  ngOnInit(){
    this.customerList = this.dataService.getCustomer();
  }
  

}
