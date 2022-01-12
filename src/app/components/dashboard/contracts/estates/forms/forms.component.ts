import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {COMMA, ENTER, F} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { RealStateDataService } from 'src/app/services/contracts/real-state-data.service';

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
  
  constructor(private fb: FormBuilder, private realEstateDataService: RealStateDataService) { 
  }

  ngOnInit(): void {
    
  }

  frmEstate = this.fb.group({
    domus: ['', Validators.required],
    propertyTypeSelected: ['', Validators.required],
    addressEstate: ['', Validators.required],
    garagesEstate: ['', Validators.required]
  });
  
  garages: Garage[] = [];
  useFullRoom: UseFullRoom[] = [];
  propertiesType: any = [
    {value: 'CASA', viewValue: 'CASA'},
    {value: 'APARTAMENTO', viewValue: 'APARTAMENTO'},
    {value: 'BODEGA', viewValue: 'BODEGA'},
    {value: 'OFICINA', viewValue: 'OFICINA'}
  ];

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
    if(this.frmEstate.valid){
      const estateData: any = {
        domus: this.frmEstate.value.domus,
        propertyType: this.frmEstate.value.propertyTypeSelected,
        address: this.frmEstate.value.addressEstate,
        garages: this.frmEstate.value.garagesEstate
      }
      this.realEstateDataService.createRealEstateData(estateData);
      this.realEstateDataService.getRealEstateDataFreeProperty();
    }
  }

  onReset():void {
    this.frmEstate.reset();
  }

}
