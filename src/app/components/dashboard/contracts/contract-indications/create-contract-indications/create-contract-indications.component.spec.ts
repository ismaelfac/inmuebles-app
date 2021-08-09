import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateContractIndicationsComponent } from './create-contract-indications.component';

describe('CreateContractIndicationsComponent', () => {
  let component: CreateContractIndicationsComponent;
  let fixture: ComponentFixture<CreateContractIndicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateContractIndicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateContractIndicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
