import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranddetailComponent } from './branddetail.component';

describe('BranddetailComponent', () => {
  let component: BranddetailComponent;
  let fixture: ComponentFixture<BranddetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranddetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranddetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
