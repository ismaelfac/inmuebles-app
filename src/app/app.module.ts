import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';


//:APPLICATION
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStatesComponent } from './components/list-states/list-states.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';
import { StatesComponent } from './components/states/states.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TemplatePdfComponent } from './components/template-pdf/template-pdf.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './services/auth-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    ListStatesComponent,
    StatesComponent,
    TemplatePdfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule, 
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    SharedModule
  ],
  providers: [CookieService, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
