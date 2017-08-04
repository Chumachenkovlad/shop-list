import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewProductsItemComponent } from './add-new-products-item.component';

describe('AddNewProductsItemComponent', () => {
  let component: AddNewProductsItemComponent;
  let fixture: ComponentFixture<AddNewProductsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewProductsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewProductsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
