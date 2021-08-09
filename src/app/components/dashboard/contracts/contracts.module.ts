import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';


import { ContractIndicationsComponent } from './contract-indications/contract-indications.component';
import { HomeContractComponent } from './home-contract/home-contract.component';
import { ListContractIndicationsComponent } from './contract-indications/list-contract-indications/list-contract-indications.component';
import { CreateContractIndicationsComponent } from './contract-indications/create-contract-indications/create-contract-indications.component';


@NgModule({
  declarations: [
    ContractIndicationsComponent,
    HomeContractComponent,
    ListContractIndicationsComponent,
    CreateContractIndicationsComponent
  ],
  imports: [
    CommonModule,
    ContractsRoutingModule,
    SharedModule,
    MatToolbarModule
  ]
})
export class ContractsModule { }
