import { Injectable } from '@angular/core';
import {Product} from '../../../core/entitys/APIs/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  NAMES_AVAILAIBLE = ['Christmas Cracker','Blue Partyhat','Black Santa hat']
  ICONS_AVAILAIBLE = ['icons/rs-product-card-icon.png','icons/lol-product-card-icon.png','icons/metin-product-card-icon.png']
  IMG_AVAILABLE = ['img/rs_candy.png','img/black_santa_hat.png','img/pokeballs.png']
  DESCRIPTIONS_AVAILAIBLE = [
    'A festive cracker for celebrations.',
    'A rare blue party hat from ancient events.',
    'A mysterious black Santa hat with a dark past.'
  ];
  MAX_PRICE = 5000
  MIN_PRICE = 10

  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  getProducts(productNeed: number = 10): Product[] {
    const products: Product[] = [];

    for (let i = 0; i < productNeed; i++) {
      const randomNameIndex = this.getRandomNumber(0, this.NAMES_AVAILAIBLE.length - 1);
      const randomIconIndex = this.getRandomNumber(0, this.ICONS_AVAILAIBLE.length - 1);
      const randomImgIndex = this.getRandomNumber(0, this.IMG_AVAILABLE.length - 1);
      const randomDescriptionIndex = this.getRandomNumber(0, this.DESCRIPTIONS_AVAILAIBLE.length - 1);

      const product: Product = {
        name: this.NAMES_AVAILAIBLE[randomNameIndex],
        price: this.getRandomNumber(this.MIN_PRICE, this.MAX_PRICE),
        discount: this.getRandomNumber(0, 100),
        logo_game: this.ICONS_AVAILAIBLE[randomIconIndex],
        img: this.IMG_AVAILABLE[randomImgIndex],
        description: this.DESCRIPTIONS_AVAILAIBLE[randomDescriptionIndex],
        inStock: this.getRandomBoolean(),
        onSale: this.getRandomBoolean()
      };

      products.push(product);
    }

    return products;
  }
}
