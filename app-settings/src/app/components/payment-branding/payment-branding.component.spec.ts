import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentBrandingComponent } from './payment-branding.component';

describe('PaymentBrandingComponent', () => {
  let component: PaymentBrandingComponent;
  let fixture: ComponentFixture<PaymentBrandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentBrandingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentBrandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
