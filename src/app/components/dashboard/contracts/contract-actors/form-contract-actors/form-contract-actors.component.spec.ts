import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContractActorsComponent } from './form-contract-actors.component';

describe('FormContractActorsComponent', () => {
  let component: FormContractActorsComponent;
  let fixture: ComponentFixture<FormContractActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormContractActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormContractActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
