import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductsWindowComponent } from './new-products-window.component';

describe('NewProductsWindowComponent', () => {
  let component: NewProductsWindowComponent;
  let fixture: ComponentFixture<NewProductsWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductsWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
