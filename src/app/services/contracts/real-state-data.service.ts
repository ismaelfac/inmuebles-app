import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthInterceptorService } from "../auth-interceptor.service";
import { Observable, throwError } from 'rxjs';
import { RealStateDatas } from '../../interfaces/real-state-datas';

@Injectable({
  providedIn: 'root'
})
export class RealStateDataService {
  public url  = 'http://localhost:3000/api/1.0/real_estate_data';
  constructor(private httpClient: HttpClient) { }


}
