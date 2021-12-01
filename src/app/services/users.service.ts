import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL: string = 'http://localhost:3000/api/1.0';
  private token: any = '';
  cookie = localStorage.getItem("ACCESS_TOKEN");

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<IUsers[]> {
    let params = new HttpParams();
    params = params.append('token', `${this.getToken()}`);
    return this.httpClient.get<IUsers[]>(`${this.API_URL}/users`,{params})
  }

  deleteUser(id: string) {
    return this.httpClient.delete(`${this.API_URL}/${id}`);
  }

  setActive(id: string) {
    console.log(`${this.API_URL}/${id}`)
    return this.httpClient.post(`${this.API_URL}/${id}`, id);
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
