import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { ReactiveFormsModule } from '@angular/forms';


//:APPLICATION
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStatesComponent } from './components/list-states/list-states.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatesComponent } from './components/states/states.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './components/shared/shared.module';


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
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
