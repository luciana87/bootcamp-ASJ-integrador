import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPurchaseOrderComponent } from './form-purchase-order.component';

describe('FormPurchaseOrderComponent', () => {
  let component: FormPurchaseOrderComponent;
  let fixture: ComponentFixture<FormPurchaseOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPurchaseOrderComponent]
    });
    fixture = TestBed.createComponent(FormPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
