import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: HomeComponent},
    { path: 'usuarios', component: UsersComponent},
    { path: 'reportes', component: ReportsComponent},
    { path: 'crear-usuario', component: UsersCreateComponent},
    { path: 'contractos', loadChildren: () => import('../dashboard/contracts/contracts.module').then(x => x.ContractsModule)},
    { path: 'inventarios', loadChildren: () => import('../dashboard/inventory/inventory.module').then(x => x.InventoryModule)},
    { path: 'configuracion', loadChildren: () => import('../dashboard/settings/settings.module').then(x => x.SettingsModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
