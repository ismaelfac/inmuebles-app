import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PropertiesContractService {

  constructor(private httpClient: HttpClient) { }

  getPropertiesContract(contractId: string) {
    console.log('desde el servicio'+contractId);
    return this.httpClient.get('../../assets/data/propertiesContract.json', {
      params: {
        contractId
      }
    });
  } 
}
