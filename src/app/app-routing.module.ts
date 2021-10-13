import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)},
  { path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  { path: '**', redirectTo: '/auth', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
