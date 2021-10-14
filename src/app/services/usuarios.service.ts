import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  
          
  constructor(private http: HttpClient) { 
    
   }

  getUsuario() {
    let params = new HttpParams().append('page', '2');
    params = params.append('Ismael', 'Lastre');
    return this.http.get('http://localhost:3000/api/1.0/real_estate_data',)
  }
}
