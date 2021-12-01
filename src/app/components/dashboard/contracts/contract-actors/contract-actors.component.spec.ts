import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractActorsComponent } from './contract-actors.component';

describe('ContractActorsComponent', () => {
  let component: ContractActorsComponent;
  let fixture: ComponentFixture<ContractActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
