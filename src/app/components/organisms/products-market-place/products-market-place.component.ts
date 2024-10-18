import {Component, Input} from '@angular/core';
import {Product} from '../../../core/entitys/APIs/product';
import {ProductCardComponent} from '../../molecules/product-card/product-card.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: ' app-products-market-place',
  standalone: true,
  imports: [
    ProductCardComponent,
    NgForOf
  ],
  templateUrl: './products-market-place.component.html',
  styleUrl: './products-market-place.component.css'
})
export class ProductsMarketPlaceComponent {
  @Input() products: Product[] = []
}
