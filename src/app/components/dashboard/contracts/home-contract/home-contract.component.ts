import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-home-contract',
  templateUrl: './home-contract.component.html',
  styleUrls: ['./home-contract.component.css']
})
export class HomeContractComponent implements OnInit {
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
