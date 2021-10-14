import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsers } from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_URL = 'http://localhost:3000/api/1.0/users';
  client = new XMLHttpRequest();
  cookie = localStorage.getItem("ACCESS_TOKEN");

  constructor(private http: HttpClient) { }

  getUsers() {
    this.client.open("GET", this.API_URL, false);//This Post will become put 
    this.client.setRequestHeader("Accept", "application/json");
    this.client.setRequestHeader("Content-Type","application/json");
    //this.client.setRequestHeader("token", this.cookie);
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
