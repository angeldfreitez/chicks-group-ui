import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsMarketPlaceComponent } from './products-market-place.component';

describe('ProductsMarketPlaceComponent', () => {
  let component: ProductsMarketPlaceComponent;
  let fixture: ComponentFixture<ProductsMarketPlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductsMarketPlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsMarketPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
