import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {COMMA, ENTER, F} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Garage {
  name: string;
}

export interface UseFullRoom {
  name: string;
}
@Component({
  selector: 'form-estate',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  frmEstate = this.fb.group({
    domus: ['', Validators.required],
    propertyTypeSelected: ['', Validators.required],
    addressEstate: ['', Validators.required],
    garagesEstate: ['', Validators.required],
    useFullRoom: ['', Validators.required],
  });
  
  garages: Garage[] = [];
  useFullRoom: UseFullRoom[] = [];
  propertiesType: any = [
    {value: 'CASA', viewValue: 'CASA'},
    {value: 'APARTAMENTO', viewValue: 'APARTAMENTO'},
    {value: 'BODEGA', viewValue: 'BODEGA'},
    {value: 'OFICINA', viewValue: 'OFICINA'}
  ]
  
  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    
  }
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.garages.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(garage: Garage): void {
    const index = this.garages.indexOf(garage);

    if (index >= 0) {
      this.garages.splice(index, 1);
    }
  }

  createEstate(): any {
    console.log(this.frmEstate.value)
  }

  onReset():void {
    this.frmEstate.reset();
  }

}
