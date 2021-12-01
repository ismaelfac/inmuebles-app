import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContractActorsComponent } from './list-contract-actors.component';

describe('ListContractActorsComponent', () => {
  let component: ListContractActorsComponent;
  let fixture: ComponentFixture<ListContractActorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContractActorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContractActorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
