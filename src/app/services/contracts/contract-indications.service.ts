import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContractIndications } from '../../interfaces/contractIndications';

@Injectable({
  providedIn: 'root'
})
export class ContractIndicationsService {
  AUTH_SERVER: string = 'http://localhost:3000/api/1.0';
  private token: any = '';
  constructor(private httpClient: HttpClient) { }

  getContractIndications(): Observable<ContractIndications[]> {
    let params = new HttpParams();
    params = params.append('token', `${this.getToken()}`)
    return this.httpClient.get<ContractIndications[]>(`${this.AUTH_SERVER}/contracts`, {params});
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
