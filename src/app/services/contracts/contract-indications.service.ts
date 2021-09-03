import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractIndications } from '../../interfaces/contractIndications';

@Injectable({
  providedIn: 'root'
})
export class ContractIndicationsService {

  constructor(private httpClient: HttpClient) { }

  getContractIndications(): Observable<ContractIndications[]> {
    return this.httpClient.get<ContractIndications[]>('http://localhost:3000/contracts');
  }
}
