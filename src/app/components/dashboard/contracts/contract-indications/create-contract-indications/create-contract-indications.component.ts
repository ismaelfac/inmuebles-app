import { Component, OnInit, ViewChild } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatChipInputEvent} from '@angular/material/chips';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
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
export interface Fruit {
  name: string;
}
interface Garage {
  value: string;
  viewValue: string;
}
interface ContractType {
  value: string;
  viewValue: string;
}
interface AccountType {
  value: string;
  viewValue: string;
}
interface BankConsign {
  value: string;
  viewValue: string;
}

interface FieldArrendatario {
  id: string;
  name: string;
  value: string;
}
interface DeudorSolidario {
  id: string;
  name: string;
  value: string;
}
interface Owners {
  name: string;
  value: string;
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
  numArrentararios: number = 0;
  numDeudores: number = 0;
  selectedValueGarage: any = '';
  selectedValueContractType: any = '';
  selectedValueAccountType:any = '';
  selectedValueBankConsign:any = '';

  tiempoEstimado = new FormControl(11, Validators.min(1));
  periodoGracia: boolean = false;
  IsPersonaJuridica: boolean = true;
  totalDivisionValue: boolean = false;
  OptdeudorSolidario: boolean = false;
  esAmparado: boolean = true;
  esValorIntegral: boolean = false;
  divisionValue = new FormControl(5, Validators.min(1));
  typesOfShoes: string[] = ['Boots'];
  selectedValueTypePerson: string = '';
  typePerson: string[] = ['Natural', 'Juridica'];

  constructor(fb: FormBuilder) { 
      this.numArrentararios = this.fieldArrendatario.length;
   }

  ngOnInit(): void {
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

  accountType: AccountType[] = [
    {value: '0', viewValue: 'No Aplica'},
    {value: '1', viewValue: 'Ahorros'},
    {value: '2', viewValue: 'Corriente'},
  ]

  bankConsign: BankConsign[] = [
    {value: '0', viewValue: 'No Aplica'},
    {value: '1', viewValue: 'Bancolombia'},
    {value: '2', viewValue: 'Davivienda'}
  ]
  numOwner: number = 0;
  owners: Owners[] = [
    { name: 'propietario1', value: '1'}
  ]
  fieldArrendatario: FieldArrendatario[] = [
    { id: '1', name: 'Arrendatario 1', value: 'A1'}
  ]
  fieldDeudores: DeudorSolidario[] = [
    { id: '1', name: 'deudor 1', value: 'D1'}
  ]

  setPeriodoGracia(): any {
    this.periodoGracia = !this.periodoGracia;
  }
  
  setTotalDivisionValue(): any {
    this.totalDivisionValue = !this.totalDivisionValue;
  }

  setDivisionValue($event:any){
    console.log(this.owners);
    this.owners.push($event.target.value);
    console.log(this.owners);
  }

  setArrendatario(action: string){
    let numPerson = this.fieldArrendatario.length;
     numPerson++;
    if(action === '+'){
      this.fieldArrendatario.push({
        id: ''+numPerson,
        name: 'Arrendatario '+numPerson,
        value: 'A'+numPerson
      });
      console.log(this.fieldArrendatario)
    }else{
      this.fieldArrendatario.pop();
    }
    console.log(action)
  }

  setNumArrendatario($event:any) {
    
  }
  
  setDeudorSolidario(action: string) {
    let numPerson = this.fieldDeudores.length;
     numPerson++;
    if(action === '+'){
      this.fieldDeudores.push({
        id: ''+numPerson,
        name: 'Deudor '+numPerson,
        value: 'D'+numPerson
      });
      console.log(this.fieldDeudores)
    }else{
      this.fieldDeudores.pop();
    }
    console.log(action)
  }

  setEsAmparado($event:any) {
    this.esAmparado = !this.esAmparado;
  }

  setValorIntegral($event:any) {
    this.esValorIntegral = !this.esValorIntegral;
  }
  setValorAdministracion() {

  }

  haveRut(event:void) {
    console.log("Tiene RUT")
  }
  
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  fruits: Fruit[] = [];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
