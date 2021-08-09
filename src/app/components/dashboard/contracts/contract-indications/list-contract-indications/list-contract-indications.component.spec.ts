import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContractIndicationsComponent } from './list-contract-indications.component';

describe('ListContractIndicationsComponent', () => {
  let component: ListContractIndicationsComponent;
  let fixture: ComponentFixture<ListContractIndicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContractIndicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContractIndicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
