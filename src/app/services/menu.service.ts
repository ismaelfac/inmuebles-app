import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  AUTH_SERVER: string = 'http://localhost:3000/api/1.0';
  private token: any = '';
  constructor(private http: HttpClient) { 

   }

  getMenu(): Observable<Menu[]> {
    let params = new HttpParams();
    params = params.append('token', `${this.getToken()}`)
    const resultMenu = this.http.get<Menu[]>(`${this.AUTH_SERVER}/menu_roles`, {params});
    return resultMenu;
  }
  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
