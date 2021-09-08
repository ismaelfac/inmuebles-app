import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractIndicationsComponent } from './contract-indications/contract-indications.component';
import { CreateContractIndicationsComponent } from './contract-indications/create-contract-indications/create-contract-indications.component';
import { ViewContractIndicationsComponent } from './contract-indications/view-contract-indications/view-contract-indications.component';
import { HomeContractComponent } from './home-contract/home-contract.component';

const routes: Routes = [
  { path: '', component: HomeContractComponent, children: [
    { path: 'indicaciones-contratos', component: ContractIndicationsComponent},
    { path: 'indicaciones-contratos/:id', component: ViewContractIndicationsComponent},
    { path: 'crear-indicaciones-contrato', component: CreateContractIndicationsComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractsRoutingModule { }
