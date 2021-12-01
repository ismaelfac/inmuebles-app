import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

interface FieldArrendatario {
  id: string;
  name: string;
  value: string;
}

@Component({
  selector: 'form-contract-actors',
  templateUrl: './form-contract-actors.component.html',
  styleUrls: ['./form-contract-actors.component.css']
})
export class FormContractActorsComponent implements OnInit {
  selectedValueTypePerson: string = '';
  numArrentararios: number = 0;
  titleArrendatario: string = 'Arrendatario';
  IsPersonaJuridica: boolean = false;

  fieldArrendatario: FieldArrendatario[] = [
    { id: '1', name: 'Arrendatario 1', value: 'A1'}
  ]

  frmContractActors = this.fb.group({
    selectedValueTypePerson: [''],
    txtNamesActor: [''],
    txtDniActor: [''],
    txtEmailActor: [''],
    txtAddressActor: [''],
    txtPhoneActor: [''],
    checkIfRut: ['']
  })
  constructor(private fb: FormBuilder) { 
    
    this.numArrentararios = this.fieldArrendatario.length;
   }

  ngOnInit(): void {
    this.frmContractActors.valueChanges.subscribe(
      data => {
        (data.selectedValueTypePerson === 'Juridica') ? this.IsPersonaJuridica = true : this.IsPersonaJuridica = false;
        
      }
    )
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
    }else{
      this.fieldArrendatario.pop();
    }
    this.titleArrendatario = (this.fieldArrendatario.length === 1 ? 'Arrendatario' : 'Arrendatarios');
  }

  setTypePersonJuridica(value:string){

  }

  haveRut(event:void) {
    console.log("Tiene RUT")
  }

  onCreateContractActors() {
    this.frmContractActors.value();
  }

  onReset():void {
    this.frmContractActors.reset();
  }

  setRUT() {

  }

}
