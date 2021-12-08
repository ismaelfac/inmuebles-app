import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  titleArrendatario: string = 'Arrendatario';
  IsPersonaJuridica: boolean = true;
  flexLayoutLeese: number = 100;
  panelOpenState = false;
  titleActor: string = 'Arrendatario';
  public previsualizacion: string = '';
  records: Section[] = [];
  selectedValueTypeActor: string = '';
  frmContractActors!: FormGroup;
  
  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.frmContractActors = this.fb.group({
      selectedValueTypeActor: ['', Validators.required],
      actors: this.fb.array([])
    })      
  }

  addActors() {
    let actors = this.frmContractActors.get('actors') as FormArray;
    actors.push(this.fb.group({
      selectedValueTypePerson: ['', Validators.required],
      txtNamesActor: ['', Validators.required],
      txtDniActor: ['', Validators.required],
      txtEmailActor: ['', Validators.required],
      txtAddressActor: ['', Validators.required],
      txtPhoneActor: ['', Validators.required]
    }))
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
  onCreateContractActors() {
    
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
