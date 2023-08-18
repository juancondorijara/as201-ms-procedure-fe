import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  
  login(user: string, password: string): Observable<any> {
    let body = {
      "email": user, //eve.holt@reqres.in
      "password": password //cityslicka
    }
    return this.http.post('https://reqres.in/api/login', body);
    //https://reqres.in/#support-heading
  }
}
