import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramService extends HttpService{

  constructor(httpClient: HttpClient) {
    super(httpClient);
    this.controllerUrl = 'api/Program';   
  }
  
  getPrograms() {
    return this.httpGet();
  }
}
