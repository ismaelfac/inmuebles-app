import {Component} from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface StatesTab {
  label: string;
  content: string;
}
@Component({
  selector: 'states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent {

  asyncTabs: Observable<StatesTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<StatesTab[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Comercial', content: 'Content 1'},
          {label: 'Estadisticas', content: 'Content 2'},
          {label: 'Configuracion', content: 'Content 3'},
        ]);
      }, 1000);
    });
  }

}
