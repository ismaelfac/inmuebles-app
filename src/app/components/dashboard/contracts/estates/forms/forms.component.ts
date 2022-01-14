import { ViewChild, Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {COMMA, ENTER, F} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { RealStateDataService } from 'src/app/services/contracts/real-state-data.service';

interface Transaction {
  title: string;
  data: string;
}
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
  @ViewChild(MatSort) sort!: MatSort;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;


  frmEstate = this.fb.group({
    domus: ['', Validators.required],
    propertyTypeSelected: ['', Validators.required],
    addressEstate: ['', Validators.required],
    garagesEstate: ['', Validators.required]
  });
  
  garages: Garage[] = [];
  useFullRooms: UseFullRoom[] = [];
  propertiesType: any = [
    {value: 'CASA', viewValue: 'CASA'},
    {value: 'APARTAMENTO', viewValue: 'APARTAMENTO'},
    {value: 'BODEGA', viewValue: 'BODEGA'},
    {value: 'OFICINA', viewValue: 'OFICINA'},
    {value: 'LOTE COMERCIAL', viewValue: 'LOTE COMERCIAL'}
  ]
  
  constructor(private fb: FormBuilder, private _realEstateDataService: RealStateDataService) { 

  }

  ngOnInit(): void {
    this.loadDocumentEstateData();
  }

  ngAfterViewInit() {
    
  }

  LIST_DOCUMENT_CONTRACT_ESTATE: any[] = [];
  
  displayedColumns: string[] = ['filename', 'destination'];
  dataSource = new MatTableDataSource<Transaction>(this.LIST_DOCUMENT_CONTRACT_ESTATE);

  loadDocumentEstateData() {
    this._realEstateDataService.getRealEstateDataFreeProperty().subscribe(estate => {
      estate.map(item => {
        this.LIST_DOCUMENT_CONTRACT_ESTATE.push(item)
      });
    });
    this.dataSource = new MatTableDataSource(this.LIST_DOCUMENT_CONTRACT_ESTATE);
    console.log(this.LIST_DOCUMENT_CONTRACT_ESTATE)
  }
  
  addGarage(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.garages.push({name: value});
    }
    this.garages;

    // Clear the input value
    event.chipInput!.clear();
  }

  removeGarage(garage: Garage): void {
    const index = this.garages.indexOf(garage);

    if (index >= 0) {
      this.garages.splice(index, 1);
    }
    this.garages;
  }

  addUseFullRoom(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.useFullRooms.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  removeUseFullRoom(useFullRoom: UseFullRoom): void {
    const index = this.useFullRooms.indexOf(useFullRoom);

    if (index >= 0) {
      this.useFullRooms.splice(index, 1);
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
      this._realEstateDataService.createRealEstateData(estateData);
      this._realEstateDataService.getRealEstateDataFreeProperty();
    }
  }

  onReset():void {
    this.frmEstate.reset();
    this.garages.length = 0;
    this.useFullRooms.length = 0;
  }

  loadDocumentContractEstate() {
    
  }
}
