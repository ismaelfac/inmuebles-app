import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

//:ANGULAR MATERIAL
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

//:APPLICATION
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStatesComponent } from './components/list-states/list-states.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatesComponent } from './components/states/states.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStatesComponent,
    StatesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
