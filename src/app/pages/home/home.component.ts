import { Component } from '@angular/core';
import {CardComponent} from '../../components/atoms/card/card.component';
import {ProductCardComponent} from '../../components/molecules/product-card/product-card.component';
import {
  ProductsMarketPlaceComponent
} from '../../components/organisms/products-market-place/products-market-place.component';
import {ProductsService} from '../../services/APIs/products/products.service';
import {Product} from '../../core/entitys/APIs/product';
import {PaginatorComponent} from '../../components/molecules/paginator/paginator.component';
import {SortByComponent} from '../../components/molecules/sort-by/sort-by.component';
import {SearchBarComponent} from '../../components/organisms/search-bar/search-bar.component';
import {CardStyle} from '../../core/entitys/components/card';
import {SelectGameComponent} from '../../components/molecules/select-game/select-game.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardComponent,
    ProductCardComponent,
    ProductsMarketPlaceComponent,
    PaginatorComponent,
    SortByComponent,
    SearchBarComponent,
    SelectGameComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products: Product[] = [];
  displayedProducts: Product[] = [];
  totalPages = 2;
  currentPage = 1;
  productsPerPage: number = 8;

  cardStyle: CardStyle = {
    backgroundColor: '#303141',
    padding: '20px',
    margin: '20px 0 50px 0',
    borderColor: 'var(--border-color)',
    width: '100%',
    height: '100%'
  }

  constructor(
    private serviceProduct: ProductsService
  ) {
    this.products = this.serviceProduct.getProducts(2510)
    this.updateDisplayedProducts();
    this.totalPages = Math.ceil(this.products.length / this.productsPerPage);
  }

  updateDisplayedProducts() {
    const startIndex = (this.currentPage - 1) * this.productsPerPage;
    const endIndex = startIndex + this.productsPerPage;
    this.displayedProducts = this.products.slice(startIndex, endIndex);
  }
  onPageChanged(newPage: number) {
    this.currentPage = newPage;
    this.updateDisplayedProducts();
  }
}
