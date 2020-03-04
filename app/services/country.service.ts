import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class CountryService extends HttpService {

  constructor(httpClient: HttpClient) { 
    super(httpClient);
    this.controllerUrl = 'api/country';   
  }

  getCountries() {
    return this.httpGet();
  }
  
}
