import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InvoiceModule } from './invoice/invoice.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, InvoiceModule]
})
export class AppComponent {
  title = 'invoice-app';

  name = "Justyna";
  test1(){
    alert("test1!");
  }
}
