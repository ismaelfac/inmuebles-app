import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _usersService: UsersService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  LIST_USERS: Users[] = [];

  displayedColumns: string[] = ['id','user', 'names', 'lastName', 'isActive','options'];
  dataSource = new MatTableDataSource(this.LIST_USERS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadUsers() {
    this._usersService.getUsers().subscribe(data => {
      this.LIST_USERS = data;
      this.dataSource = new MatTableDataSource(this.LIST_USERS);
    });
  }

  DeleteUser(index:number): void {
    this._usersService.deleteUser(index);
    this.loadUsers();
    this._snackBar.open('El usuario fue elminado con exito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  isActive(index:number): void {
    console.log(index);
  }

  

}
