import {AfterViewInit, OnInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { RealStateDataService } from "src/app/services/contracts/real-state-data.service";
import { RealStateDatas } from 'src/app/interfaces/real-state-datas';

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

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

  LIST_REAL_ESTATE_DATA: any[] = [];
  displayedColumns: string[] = ['_id', 'propertyType', 'address', 'isActive'];
  dataSource = new MatTableDataSource<RealStateDatas>(this.LIST_REAL_ESTATE_DATA);

  loadRealEstateData() {
    this.realEstateDataService.getRealEstateData().subscribe(data => {
      this.LIST_REAL_ESTATE_DATA.push(data[0])
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
