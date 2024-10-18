import {Component, Input} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product-on-sale',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './product-on-sale.component.html',
  styleUrl: './product-on-sale.component.css'
})
export class ProductOnSaleComponent {
  @Input() onSale: boolean = true
  @Input() inStock: boolean = true
}
