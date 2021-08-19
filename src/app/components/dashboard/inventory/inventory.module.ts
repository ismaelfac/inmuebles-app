import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';

import { HomeInventoryComponent } from './home-inventory/home-inventory.component';


@NgModule({
  declarations: [
    HomeInventoryComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule,
    SharedModule,
    MatToolbarModule
  ]
})
export class InventoryModule { }
