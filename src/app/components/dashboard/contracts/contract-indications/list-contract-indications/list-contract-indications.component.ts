import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';


import { ContractIndicationsService } from 'src/app/services/contracts/contract-indications.service';
import { ContractIndications } from 'src/app/interfaces/contractIndications';

@Component({
  selector: 'list-contract-indications',
  templateUrl: './list-contract-indications.component.html',
  styleUrls: ['./list-contract-indications.component.css']
})
export class ListContractIndicationsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private _contractsIndicationsService: ContractIndicationsService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadContractIndications();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  LIST_CONTRACT_INDICATIONS: ContractIndications[] = [];

  displayedColumns: string[] = ['id', 'contrato','arrendatario', 'deudorSolidario', 'addressInmueble', 'isActive','options'];
  dataSource = new MatTableDataSource(this.LIST_CONTRACT_INDICATIONS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadContractIndications() {
    this._contractsIndicationsService.getContractIndications().subscribe(data => {
      this.LIST_CONTRACT_INDICATIONS = data;
      this.dataSource = new MatTableDataSource(this.LIST_CONTRACT_INDICATIONS);
    });
  }

  isActive(index:number): void {
    console.log(index);
  }

}
