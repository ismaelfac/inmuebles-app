import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../components/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {LoginComponent} from '../components/login/login.component';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AuthRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatFormFieldModule
  ],
  providers: [AuthService]
})
export class AuthModule { }
