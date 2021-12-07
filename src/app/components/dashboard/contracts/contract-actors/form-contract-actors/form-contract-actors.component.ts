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
  selectedValueTypePerson: string = '';
  selectedValueTypeActor: string = '';

  frmContractActors = this.fb.group({
    selectedValueTypeActor: ['', Validators.required],
    person: this.fb.group({
      actors: this.fb.array([
        this.fb.control('')
      ])
    })
  })

  
  constructor(private sanitizer: DomSanitizer, private fb: FormBuilder) { 
    
  }

  get actors() {
    return this.frmContractActors.get('actors') as FormArray;
  }

  addActors() {
    this.actors.push(this.fb.control(''))
  }


  ngOnInit(): void {
    
        (this.selectedValueTypePerson === 'Juridica') ? this.IsPersonaJuridica = true : this.IsPersonaJuridica = false;        
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
