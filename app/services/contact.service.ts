import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService extends HttpService {

  constructor(httpClient: HttpClient) { 
    super(httpClient);
    this.controllerUrl = 'api/Conts';    
  }

  public getAllContacts() {
    return this.httpGet();    
  }

  public getContact(id) {
    return this.httpGet(`${id}`);;    
  }

  public addContact(contact) {
    return this.httpPost(contact);
  }

  // public remove(payload) {
  //   return this.http.delete(this.accessPointUrl + '/' + payload.contId, {headers: this.headers});
  // }

  public updateContact(contact) {
    return this.httpPut(contact, `${contact.contId}`);
  }
  
}
