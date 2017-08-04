import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DontExistComponent } from './dont-exist.component';

describe('DontExistComponent', () => {
  let component: DontExistComponent;
  let fixture: ComponentFixture<DontExistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DontExistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DontExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
