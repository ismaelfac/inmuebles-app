import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moduleActive : boolean = false;
  panel_title: string = 'Panel de Contratos';
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  setModuleActive($event:any): void {
    console.log($event);
    this.panel_title = $event;
    this.moduleActive = true;
  }

}
