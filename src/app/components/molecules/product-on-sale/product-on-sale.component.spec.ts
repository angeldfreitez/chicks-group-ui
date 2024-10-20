import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOnSaleComponent } from './product-on-sale.component';

describe('ProductOnSaleComponent', () => {
  let component: ProductOnSaleComponent;
  let fixture: ComponentFixture<ProductOnSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOnSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOnSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
