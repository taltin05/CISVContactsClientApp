import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService extends HttpService{

  constructor(httpClient: HttpClient) { 
    super(httpClient);
    this.controllerUrl = 'api/Participations';    
  }

  getAllParticipations() {
    return this.httpGet();    
  }

  getParticipationsForContact(contactId) {
    return this.httpGet(`ParticipationsByContact/${contactId}`);
  }

  public addNewParticipation(participation) {
    return this.httpPost(participation);
  }

}
