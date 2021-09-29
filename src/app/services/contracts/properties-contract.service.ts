import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PropertiesContractService {

  constructor(private httpClient: HttpClient) { }

  getPropertiesContractId(contractId: string) {
    return this.httpClient.get(`http://localhost:3000/propertiesContract/${contractId}`);
  } 
}
