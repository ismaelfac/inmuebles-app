import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private token: any;
  public name: any = '';
  menu: Menu[] = [];

  constructor(private _menuService: MenuService) { 

  }
  
  ngOnInit(): void {
    this.loadMenu();
    this.getToken();
  }

  loadMenu(): void {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

  private getToken() {
    if(this.token) {
      this.name = localStorage.getItem("NAME");
    }      
  }

  public signup(): void {
    if(this.token) {
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("NAME");
      localStorage.removeItem("AVATAR");
      localStorage.removeItem("EXPIRES_IN");
      localStorage.removeItem("EMAIL");
    }
  }



}
