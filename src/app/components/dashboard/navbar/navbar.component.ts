import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menu: Menu[] = [];
  public name: any = '';

  constructor(private _menuService: MenuService) { 

  }
  
  ngOnInit(): void {
    this.loadMenu();
    this.name = localStorage.getItem("NAME");
  }

  loadMenu(): void {
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

}
