import {Component, Input } from '@angular/core';
import {CardComponent} from '../../atoms/card/card.component';
import {ImgComponent} from '../../atoms/img/img.component';
import {ProductOnSaleComponent} from '../product-on-sale/product-on-sale.component';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {NumberSelectComponent} from '../../atoms/number-select/number-select.component';
import {SelectButtonComponent} from '../../atoms/select-button/select-button.component';
import {Product} from '../../../core/entitys/APIs/product';
import {PricePipe} from '../../../pipes/price/price.pipe';
import {ButtonComponent} from '../../atoms/button/button.component';
import {Icon} from '../../../core/entitys/components/icon';
import {ButtonStyle} from '../../../core/entitys/components/button';
import {CardStyle} from '../../../core/entitys/components/card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CardComponent,
    ImgComponent,
    ProductOnSaleComponent,
    NgForOf,
    NumberSelectComponent,
    SelectButtonComponent,
    PricePipe,
    NgClass,
    ButtonComponent,
    NgIf
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() onSale: boolean = true
  @Input() inStock: boolean = true

  @Input() product: Product = {
    name: 'Blue party hat',
    price: 3054,
    discount: 65,
    logo_game:'icons/rs-product-card-icon.png',
    img: 'img/rs_candy.png',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.',
    inStock: true,
    onSale: true
  }

  cardStyle:CardStyle = {
    backgroundColor: '#323648',
    padding: '10px',
    margin: '0',
    borderColor: '#323648',
    width: '100%',
    height: '275px'
  }

  buttonAddStyle: ButtonStyle = {
    background: '#5762d5',
    color: '#fff',
    fontSize: '12px',
    fontWeight: '500',
    padding: '14px 10px',
    margin: '0',
    iconSize: '15px'
  }

  buttonDetailStyle: ButtonStyle = {
    background: '#35394b',
    color: 'var(--color-not-important)',
    fontSize: '12px',
    fontWeight: '500',
    padding: '15px 10px',
    margin: '0',
    iconSize: '24px'
  }


  getProductDiscountedPrice(price:number,discount:number): number {
    return price - (price * discount / 100)
  }

  protected readonly Icon = Icon;
}
