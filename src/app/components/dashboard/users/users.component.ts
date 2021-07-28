import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  users: Users[] = [];

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  LIST_USERS: Users[] = [
    { id:1, user: 'ismaelfac', names: 'Ismael Enrique', lastName: 'Lastre Alvarez', isActive: true },
    { id:2, user: 'vvasquez', names: 'Valeria Remedios', lastName: 'Vasquez Cuesta', isActive: true },
    { id:3, user: 'rosaalvarezb', names: 'Rosa Maria', lastName: 'Alvarez Bermudez', isActive: true },
    { id:4, user: 'ktarazona', names: 'Katherine', lastName: 'Tarazona Velasquez', isActive: true },
    { id:5, user: 'rmorales', names: 'Roberto Enrique', lastName: 'Morales Frias', isActive: false },
    { id:6, user: 'rmorales', names: 'Roberto Enrique', lastName: 'Morales Frias', isActive: false },
    { id:7, user: 'rmorales', names: 'Roberto Enrique', lastName: 'Morales Frias', isActive: false },
    { id:8, user: 'rmorales', names: 'Roberto Enrique', lastName: 'Morales Frias', isActive: false },
    { id:9, user: 'rmorales', names: 'Roberto Enrique', lastName: 'Morales Frias', isActive: false },
    { id:10, user: 'rmorales', names: 'Roberto Enrique', lastName: 'Morales Frias', isActive: false },
  ];

  displayedColumns: string[] = ['id','user', 'names', 'lastName', 'isActive','options'];
  dataSource = new MatTableDataSource(this.LIST_USERS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  DeleteUser(index:number): void {
    console.log(index);
  }

}
