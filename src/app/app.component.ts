import { Component, OnInit, OnDestroy} from '@angular/core';
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'inmuebles-app';
  private mediaSub!: Subscription;
  deviceXs: boolean = false;

  constructor(public mediaObserver: MediaObserver) {}

  ngOnInit(){
    this.mediaSub = this.mediaObserver.asObservable().subscribe((changes: MediaChange[]) => {
       
    })
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }
}
