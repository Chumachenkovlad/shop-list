import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductsItemComponent } from './new-products-item.component';

describe('NewProductsItemComponent', () => {
  let component: NewProductsItemComponent;
  let fixture: ComponentFixture<NewProductsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
