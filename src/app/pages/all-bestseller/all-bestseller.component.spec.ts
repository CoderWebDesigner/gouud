import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBestsellerComponent } from './all-bestseller.component';

describe('AllBestsellerComponent', () => {
  let component: AllBestsellerComponent;
  let fixture: ComponentFixture<AllBestsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBestsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
