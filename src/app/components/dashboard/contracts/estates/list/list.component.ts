import { OnInit, Component, ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { RealStateDataService } from "src/app/services/contracts/real-state-data.service";
import { RealStateDatas } from 'src/app/interfaces/real-state-datas';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit  {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private realEstateDataService: RealStateDataService) {
    
  }

  ngOnInit(): void {
    this.loadRealEstateData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  LIST_REAL_ESTATE_DATA: RealStateDatas[] = [];
  displayedColumns: string[] = ['domus', 'propertyType', 'address'];
  dataSource = new MatTableDataSource<RealStateDatas>(this.LIST_REAL_ESTATE_DATA);


  
  loadRealEstateData() {
    this.realEstateDataService.getRealEstateDataFreeProperty().subscribe(estate => {
      estate.map(item => {
        this.LIST_REAL_ESTATE_DATA.push(item)
      })
    });
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.LIST_REAL_ESTATE_DATA);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
