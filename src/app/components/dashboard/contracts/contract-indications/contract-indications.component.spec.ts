import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractIndicationsComponent } from './contract-indications.component';

describe('ContractIndicationsComponent', () => {
  let component: ContractIndicationsComponent;
  let fixture: ComponentFixture<ContractIndicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractIndicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractIndicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
