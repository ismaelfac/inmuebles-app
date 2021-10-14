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
          this.saveToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNjYxNTFkNjU3NTg2MTc1NDM5YjdkNCIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTYzNDIzMDA1NCwiZXhwIjoxNjM0MzE2NDU0fQ.RD1Zf52JtBDWhwZa1PxmMEzT6bq0Tr1CPh005w1XYvw','86400')
        }
      )
    );

    return resultLogin;
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if(!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

}
