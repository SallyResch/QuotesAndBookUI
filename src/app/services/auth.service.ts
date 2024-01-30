import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = "https://localhost:7012/api/User/";
  constructor( private http : HttpClient) { }

signUp(userObject:any){
return this.http.post<any>(`${this.baseUrl}register`, userObject);
}

login(loginObject: any){
  return this.http.post<any>(`${this.baseUrl}authenticate`, loginObject);
}

}
