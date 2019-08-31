import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AppUser } from '../models/appUser.model';
import {LoginUser} from '../models/loginUser.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private httpClient: HttpClient) { }

  registerAppUser(appUser: any) : any {
    return this.httpClient.post("http://localhost:52295/api/Account/Register", appUser);
  }

  getTheToken(loginUser : LoginUser) : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-type','application/x-www-form-urlencoded');

    return this.httpClient.post('http://localhost:52295/oauth/token', 'username='+loginUser.UserName+'&password='+loginUser.Password+'&grant_type=password',{"headers": headers});

  }
}