import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { RealStateDatas } from '../../interfaces/real-state-datas';

@Injectable({
  providedIn: 'root'
})
export class RealStateDataService {
  AUTH_SERVER: string = 'http://localhost:3000/api/1.0';
  private token: any = '';
  constructor(private httpClient: HttpClient) { }

  getRealEstateDataFreeProperty(): Observable<RealStateDatas[]> {
    let params = new HttpParams();
    params = params.append('token', `${this.getToken()}`)
    return this.httpClient.get<RealStateDatas[]>(`${this.AUTH_SERVER}/real_estate_data/freeProperty`, {params});
  }

  getDocumentEstate() {
    let params = new HttpParams();
    params = params.append('token', `${this.getToken()}`);
    return this.httpClient.get<any[]>(`${this.AUTH_SERVER}/real_estate_data/documentsEstate`, {params});
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
