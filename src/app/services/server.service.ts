import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { AppUser } from '../models/appUser.model';
import {LoginUser} from '../models/loginUser.model';
import { Karta } from '../models/karta';
import { PriceListItem } from '../models/priceListitem';



const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class ServerService {

  constructor(private httpClient: HttpClient) { }

  registerAppUser(appUser: any) : any {
    return this.httpClient.post("http://localhost:52295/api/Account/Register", appUser);
  }
  getItems() : Observable<any>{
    return this.httpClient.get('http://localhost:52295/api/Item');
  } 

  getPrices():  Observable<any>{
    return this.httpClient.get('http://localhost:52295/api/PriceListItem');
  }
  getUserDetails(): any{
    return this.httpClient.get('http://localhost:52295/api/AppUser/0', httpOptions);
  }
  getBuyTickets(): Observable<any>{
    return this.httpClient.get('http://localhost:52295/api/Ticket');
  }

  putTicket(id_T:number, priceListItem: PriceListItem): any{
    return this.httpClient.put(`http://localhost:52295/api/PriceListItem/${id_T}`, priceListItem);}

  postTicket(ticket:Karta): Observable<any>{
    return this.httpClient.post("http://localhost:52295/api/Ticket", ticket);
  }

  getTheToken(loginUser : LoginUser) : Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.append('Content-type','application/x-www-form-urlencoded');

    return this.httpClient.post('http://localhost:52295/oauth/token', 'username='+loginUser.UserName+'&password='+loginUser.Password+'&grant_type=password',{"headers": headers});

  }
}