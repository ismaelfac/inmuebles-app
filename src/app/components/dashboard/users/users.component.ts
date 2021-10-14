import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUsers } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private cookieService: CookieService, private _usersService: UsersService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  LIST_USERS: any = [];

  displayedColumns: string[] = ['name', 'email', 'roles', 'isActive'];
  dataSource = new MatTableDataSource(this.LIST_USERS);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loadUsers() {
    this._usersService.getUsers().subscribe(data => {
      this.LIST_USERS.push(data);
      this.dataSource = new MatTableDataSource(this.LIST_USERS[0].data);
      
      console.log(this.LIST_USERS[0].data)
    });
  }

  async DeleteUser(id:string) {
    await this._usersService.deleteUser(id);
    this._snackBar.open('El usuario fue elminado con exito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
    this.loadUsers();
  }

  async setActive(id:string) {
    await this._usersService.setActive(id);
    this._snackBar.open('El usuario fue elminado con exito', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
    this.loadUsers();
  }

  

}
