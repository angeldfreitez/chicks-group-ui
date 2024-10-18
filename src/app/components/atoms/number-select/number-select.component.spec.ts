import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSelectComponent } from './number-select.component';

describe('NumberSelectComponent', () => {
  let component: NumberSelectComponent;
  let fixture: ComponentFixture<NumberSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberSelectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
