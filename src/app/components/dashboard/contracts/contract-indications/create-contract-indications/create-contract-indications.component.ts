import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

interface Garage {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'create-contract-indications',
  templateUrl: './create-contract-indications.component.html',
  styleUrls: ['./create-contract-indications.component.css']
})
export class CreateContractIndicationsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  panelOpenState = false;
  selectedValueGarage: any = '';

  constructor() { }

  ngOnInit(): void {
  }
  garage: Garage[] = [
    {value: '1', viewValue: 'Uno'},
    {value: '2', viewValue: 'Dos'},
    {value: '3', viewValue: 'Tres'}
  ];
  

}
