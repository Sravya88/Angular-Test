import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
 //const API_URL:'https://api.ubsols.com/ServiceUbsols.svc';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  GetCountryList(regName) { return this.http.get<any[]>('https://restcountries.eu/rest/v2/region/' + regName); }
    // Admin login 
    
}
