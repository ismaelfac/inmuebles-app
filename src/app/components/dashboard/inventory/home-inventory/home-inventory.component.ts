import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-inventory',
  templateUrl: './home-inventory.component.html',
  styleUrls: ['./home-inventory.component.css']
})
export class HomeInventoryComponent implements OnInit {
  moduleActive : boolean = false;
  panel_title: string = 'Panel de Inventarios';
  constructor() { }

  ngOnInit(): void {
  }

  setModuleActive($event:any): void {
    console.log($event);
    this.panel_title = $event;
    this.moduleActive = true;
  }

}
