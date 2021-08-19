import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeInventoryComponent } from './home-inventory/home-inventory.component';

const routes: Routes = [
  { path: '', component: HomeInventoryComponent, children: [

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
