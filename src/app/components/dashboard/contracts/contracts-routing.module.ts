import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractIndicationsComponent } from './contract-indications/contract-indications.component';
import { HomeContractComponent } from './home-contract/home-contract.component';

const routes: Routes = [
  { path: '', component: HomeContractComponent, children: [
    { path: 'indicaciones-contractos', component: ContractIndicationsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
