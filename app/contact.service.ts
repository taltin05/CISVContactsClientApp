import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
  }

  public get() {
    return this.http.get(this.accessPointUrl, {headers: this.headers});    
  }

  public getSingle(id) {
    return this.http.get(this.accessPointUrl + '/' + id, {headers: this.headers});    
  }

  public add(payload) {
    return this.http.post(this.accessPointUrl, payload, {headers: this.headers});
  }

  public remove(payload) {
    return this.http.delete(this.accessPointUrl + '/' + payload.contId, {headers: this.headers});
  }

  public update(payload) {
    return this.http.put(this.accessPointUrl + '/' + payload.contId, payload, {headers: this.headers});
  }
  
}
