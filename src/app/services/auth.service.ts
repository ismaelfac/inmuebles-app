import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from '../interfaces/users';
import { IJwtResponse } from "../interfaces/jwt-response";
import { tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()

export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000/api/1.0';
  authSubject = new BehaviorSubject(false);
  private token: any = '';

  constructor(private http: HttpClient) { }

  login(user: IUsers): Observable<IJwtResponse> {
    const resultLogin = this.http.post<IJwtResponse>(`${this.AUTH_SERVER}/auth/signin`, user).pipe(tap(
           (res: IJwtResponse) => {
            this.saveToken(res.accessToken, res.expiresIn, res.email, res.name, res.avatar);
          }
         )
       );
    return resultLogin;
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("NAME");
      localStorage.removeItem("AVATAR");
      localStorage.removeItem("EXPIRES_IN");
      localStorage.removeItem("EMAIL");
  }

  private saveToken(token: string, expiresIn: string, email: string, name: string, avatar: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("NAME", name);
    localStorage.setItem("AVATAR", avatar);
    
    this.token = token;
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
