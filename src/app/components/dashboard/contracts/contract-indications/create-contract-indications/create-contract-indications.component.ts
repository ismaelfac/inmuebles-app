import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.
import * as _moment from 'moment';

const moment = _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
interface Garage {
  value: string;
  viewValue: string;
}
interface ContractType {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'create-contract-indications',
  templateUrl: './create-contract-indications.component.html',
  styleUrls: ['./create-contract-indications.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class CreateContractIndicationsComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  date = new FormControl(moment());
  panelOpenState = false;
  selectedValueGarage: any = '';
  selectedValueContractType: any = '';
  tiempoEstimado = new FormControl(11, Validators.min(1));
  periodoGracia: boolean = false;

  constructor(fb: FormBuilder) { 
    
   }

  ngOnInit(): void {
    this.selectedValueGarage = 'No Aplica';
  }
  garage: Garage[] = [
    {value: '0', viewValue: 'No Aplica'},
    {value: '1', viewValue: 'Uno'},
    {value: '2', viewValue: 'Dos'},
    {value: '3', viewValue: 'Tres'}
  ];

  contractsType: ContractType[] = [
    {value: 'vivienda', viewValue: 'Vivienda'},
    {value: 'comercial', viewValue: 'Comercial'}
  ]

  setPeriodoGracia(): any {
    this.periodoGracia = !this.periodoGracia;
  }
  

}
