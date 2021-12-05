import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

interface FieldArrendatario {
  id: string;
  name: string;
  value: string;
}

export interface Section {
  name: string;
  size: string;
  type: Date;
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
  public previsualizacion: string = '';
  records: Section[] = [];
  

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
  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) { 
    
    this.numArrentararios = this.fieldArrendatario.length;
   }

  ngOnInit(): void {
    this.frmContractActors.valueChanges.subscribe(
      data => {
        (data.selectedValueTypePerson === 'Juridica') ? this.IsPersonaJuridica = true : this.IsPersonaJuridica = false;
        
      }
    )
  }

  onFileSelected($event: any) {
    const capturedFile = $event.target.files[0]
    this.extraerBase64(capturedFile).then((imagen: any) => {
      this.previsualizacion = imagen.base;
      console.log(imagen);

    })
    this.records.push(capturedFile)
    console.log(this.records);
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

  clearImage(): any {
    this.previsualizacion = '';
    this.records = [];
  }
  

  extraerBase64 = async ($event: any) => new Promise((resolve):any => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };

    } catch (e) {
      return null;
    }
  })

}
