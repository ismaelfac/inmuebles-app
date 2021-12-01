import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsContractComponent } from './forms-contract.component';

describe('FormsContractComponent', () => {
  let component: FormsContractComponent;
  let fixture: ComponentFixture<FormsContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
