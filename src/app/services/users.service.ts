import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>('./assets/data/users.json');
  }

  deleteUser(id: number) {
    let userId = this.getUsers();
    console.log(userId);
  }
}
