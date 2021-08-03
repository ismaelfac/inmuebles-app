import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private options = [];
  // delete(url: string, options: { headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; observe?: "body" | "events" | "response"; params?: HttpParams | { [param: string]: string | number | boolean | ReadonlyArray<string | ... 1 more ... | boolean>; }; reportProgress?: boolean; responseType?: "arraybuffer" | ... 2... = {}): Observable<any>

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>('./assets/data/users.json');
  }

  deleteUser(id: number) {
    return this.httpClient.delete('./assets/data/users.json', ).forEach(user => {
      console.log(id);
    });
  }
}
