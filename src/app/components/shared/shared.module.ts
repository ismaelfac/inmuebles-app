import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//:ANGULAR MATERIAL
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule as matSpinner} from '@angular/material/progress-spinner';
import {MatIconModule} from '@angular/material/icon';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    matSpinner,
    MatIconModule,
    HttpClientModule
  ],
  exports: [
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    matSpinner,
    MatIconModule,
    HttpClientModule
  ]
})
export class SharedModule { }
