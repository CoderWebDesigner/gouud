import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferproductsComponent } from './offerproducts.component';

describe('OfferproductsComponent', () => {
  let component: OfferproductsComponent;
  let fixture: ComponentFixture<OfferproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfferproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
