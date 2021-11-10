import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PropertiesContractService {
  AUTH_SERVER: string = 'http://localhost:3000/api/1.0';
  private token: any = '';
  constructor(private httpClient: HttpClient) { }

  getPropertiesContractId(contractId: string) {
    return this.httpClient.get(`${this.AUTH_SERVER}/${contractId}`);
  } 
}
