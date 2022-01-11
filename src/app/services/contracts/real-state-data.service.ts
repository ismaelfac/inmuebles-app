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

  createRealEstateData(formData: any) {
    let params = new HttpParams();
    params = params.append('token', `${this.getToken()}`)
    console.log('desde RealService: ',formData);
    const saveRealEstateData = this.httpClient.post(`${this.AUTH_SERVER}/real_estate_data`, {formData, params} )
    console.log('Respuesta del servidor', saveRealEstateData);
    return saveRealEstateData;
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
