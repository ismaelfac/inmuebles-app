import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractsRoutingModule } from './contracts-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';


import { ContractIndicationsComponent } from './contract-indications/contract-indications.component';
import { HomeContractComponent } from './home-contract/home-contract.component';
import { ListContractIndicationsComponent } from './contract-indications/list-contract-indications/list-contract-indications.component';
import { CreateContractIndicationsComponent } from './contract-indications/create-contract-indications/create-contract-indications.component';
import { CheckListComponent } from './check-list/check-list.component';
import { ViewContractIndicationsComponent } from './contract-indications/view-contract-indications/view-contract-indications.component';
import { EstatesComponent } from './estates/estates.component';
import { FormsComponent } from './estates/forms/forms.component';
import { ListComponent } from './estates/list/list.component';
import { ContractComponent } from './contract/contract.component';
import { FormsContractComponent } from './contract/forms-contract/forms-contract.component';
import { ListContractComponent } from './contract/list-contract/list-contract.component';


@NgModule({
  declarations: [
    ContractIndicationsComponent,
    HomeContractComponent,
    ListContractIndicationsComponent,
    CreateContractIndicationsComponent,
    CheckListComponent,
    ViewContractIndicationsComponent,
    EstatesComponent,
    FormsComponent,
    ListComponent,
    ContractComponent,
    FormsContractComponent,
    ListContractComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContractsRoutingModule,
    SharedModule,
    MatToolbarModule
  ]
})
export class ContractsModule { }
