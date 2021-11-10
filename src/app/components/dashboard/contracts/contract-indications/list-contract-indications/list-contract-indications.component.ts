import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

//*Services */
import { ContractIndicationsService } from 'src/app/services/contracts/contract-indications.service';
import { ContractIndications } from 'src/app/interfaces/contractIndications';
import { PdfService } from 'src/app/services/pdf.service';
import { PropertiesContractService } from 'src/app/services/contracts/properties-contract.service';

@Component({
  selector: 'list-contract-indications',
  templateUrl: './list-contract-indications.component.html',
  styleUrls: ['./list-contract-indications.component.css']
})
export class ListContractIndicationsComponent implements OnInit {
  
  //@ViewChild(MatSidenavContainer) sidenavContainer: MatSidenavContainer;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  showFiller = false;
  moduleActive : boolean = false;

  constructor(private pdfService: PdfService, private _propertiesContract : PropertiesContractService, private _contractsIndicationsService: ContractIndicationsService, private _snackBar: MatSnackBar) {

   }

  ngOnInit(): void {
    this.loadContractIndications();
    //this.sidenavContainer.scrollable.elementScrolled().subscribe(() => {});
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  LIST_CONTRACT_INDICATIONS: ContractIndications[] = [];

  displayedColumns: string[] = ['select','contractNum','arrendatario', 'deudorSolidario', 'real_estate_data.address', 'state', 'adviser.name','options'];
  dataSource = new MatTableDataSource<ContractIndications>(this.LIST_CONTRACT_INDICATIONS);
  selection = new SelectionModel<ContractIndications>(true, []);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadContractIndications() {
    this._contractsIndicationsService.getContractIndications().subscribe(contract => {
      contract.map(item => {
        console.log(item)
        this.LIST_CONTRACT_INDICATIONS.push(item);
      })
      this.dataSource = new MatTableDataSource(this.LIST_CONTRACT_INDICATIONS);
    });
  }

  isActive(index:number): void {
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ContractIndications): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.contractNum}`;
  }

  generatePDF(contractId: string) {  
    this._propertiesContract.getPropertiesContractId(contractId).subscribe(data => {
      this.pdfService.generatePdf(data);
    });
    
  }  

  viewContract(contractId: string) {
    this._propertiesContract.getPropertiesContractId(contractId).subscribe(data => {
      
    });
  }
  setModuleActive($event:any): void {
    this.moduleActive = true;
  }
  
}
