import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUsers } from '../interfaces/users';
import { IJwtResponse } from "../models/jwt-response";
import { tap } from "rxjs/operators";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()

export class AuthService {
  AUTH_SERVER: string = 'http://localhost:3000/api/1.0/';
  

  constructor() { }
}
