import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  menu: Menu[] = [];
  showFiller = false;
  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.loadMenu();
  }

  loadMenu(): void {
    this._menuService.getMenu().subscribe(data => {
      this.menu = data;
    });
  }

}
