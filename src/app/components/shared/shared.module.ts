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
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
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
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatListModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatProgressBarModule,
    MatCheckboxModule
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
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatListModule,
    MatChipsModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatProgressBarModule,
    MatCheckboxModule
  ]
})
export class SharedModule { }
