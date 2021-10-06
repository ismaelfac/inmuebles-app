import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = 'http://localhost:3000/api/1.0/users';
  private options = [];
  // delete(url: string, options: { headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; observe?: "body" | "events" | "response"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | ... 1 more ... | boolean>; }; reportProgress?: boolean; responseType?: "arraybuffer" | ... 2... = {}): Observable<any>

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(`${this.API_URL}`);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

  setActive(id: string) {
    console.log(`${this.API_URL}/${id}`)
    return this.http.post(`${this.API_URL}/${id}`, id);
  }
}
