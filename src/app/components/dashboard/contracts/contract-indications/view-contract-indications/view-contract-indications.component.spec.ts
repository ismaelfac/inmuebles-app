import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContractIndicationsComponent } from './view-contract-indications.component';

describe('ViewContractIndicationsComponent', () => {
  let component: ViewContractIndicationsComponent;
  let fixture: ComponentFixture<ViewContractIndicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContractIndicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContractIndicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
