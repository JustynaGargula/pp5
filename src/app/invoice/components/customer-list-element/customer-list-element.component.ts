import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-customer-list-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-list-element.component.html',
  styleUrl: './customer-list-element.component.scss'
})
export class CustomerListElementComponent {
  @Input()
  customer: Customer = new Customer();
}
