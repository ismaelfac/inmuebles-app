import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ContractIndicationsComponent } from './contract-indications/contract-indications.component';
import { HomeContractComponent } from './home-contract/home-contract.component';


@NgModule({
  declarations: [
    ContractIndicationsComponent,
    HomeContractComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    SharedModule
  ]
})
export class ContractsModule { }
