import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAgreementComponent } from './form-agreement.component';

describe('FormAgreementComponent', () => {
  let component: FormAgreementComponent;
  let fixture: ComponentFixture<FormAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
