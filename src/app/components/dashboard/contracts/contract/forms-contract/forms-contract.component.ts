import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
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
@Component({
  selector: 'forms-contract',
  templateUrl: './forms-contract.component.html',
  styleUrls: ['./forms-contract.component.css'],
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
export class FormsContractComponent implements OnInit {

  IsAdministracion: boolean = false;
  periodoGracia: boolean = false;
  
  frmContract = this.fb.group({
    selectedValueContractType: ['', Validators.required],
    txtAsegurable: [''],
    txtCannonLease: ['', Validators.required],
    txtAdminValue: [''],
    dateDeliveryDate: ['', Validators.required],
    txtContractDuration: ['', Validators.required],
    txtIncrement: ['', Validators.required],
    txtContractRights: ['', Validators.required],
    txtGradePeriod: [''],
    txtClause: ['']
  })

  contractsType: any = [
    {value: 'vivienda', viewValue: 'Vivienda'},
    {value: 'comercial', viewValue: 'Comercial'}
  ]

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  setPeriodoGracia(): any {
    this.periodoGracia = !this.periodoGracia;
  }
  setValorAdministracion() {
    this.IsAdministracion = !this.IsAdministracion;
  }
  onCreateContract() {
    console.log(this.frmContract.value);
  }

  onReset():void {
    this.frmContract.reset();
  }


}
