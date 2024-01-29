import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/auths.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor( private http : HttpClient) { }

signUp(userObject:any){
return this.http.post<any>(`${this.baseApiUrl}register`, userObject);
}

login(loginObject: any){
  return this.http.post<any>(`${this.baseApiUrl}authenticate`, loginObject);
}

}
