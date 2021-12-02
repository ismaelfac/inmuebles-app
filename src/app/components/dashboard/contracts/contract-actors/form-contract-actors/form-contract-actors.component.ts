import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

interface FieldArrendatario {
  id: string;
  name: string;
  value: string;
}

export interface Section {
  name: string;
  updated: Date;
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
  flexLayoutLeese: number = 100;
  fieldArrendatario: FieldArrendatario[] = [
    { id: '1', name: 'Arrendatario 1', value: 'A1'}
  ]
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  

  frmContractActors = this.fb.group({
    selectedValueTypePerson: [''],
    txtNamesActor: [''],
    txtDniActor: [''],
    txtEmailActor: [''],
    txtAddressActor: [''],
    txtPhoneActor: [''],
    selectedValueTypePersonJuridica: [''],
    txtNamesActorJuridica: [''],
    txtDniActorJuridica: [''],
    txtEmailActorJuridica: [''],
    txtAddressActorJuridica: [''],
    txtPhoneActorJuridica: ['']
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

  onFileSelected() {
    
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
