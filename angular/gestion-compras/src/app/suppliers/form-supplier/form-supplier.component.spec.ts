import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSupplierComponent } from './form-supplier.component';

describe('FormSupplierComponent', () => {
  let component: FormSupplierComponent;
  let fixture: ComponentFixture<FormSupplierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSupplierComponent]
    });
    fixture = TestBed.createComponent(FormSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
