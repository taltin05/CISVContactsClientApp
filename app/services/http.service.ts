import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' })
};


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  protected controllerUrl = '/api/ControllerName'; // URL to web api
  protected accessPointUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  protected httpGet(urlParameter?: string) {
    const url = this.getUrl(urlParameter);
    let options = httpOptions;
    return this.httpClient.get(url, options);    
  }

  protected httpPost(payload: any, urlParameter?: string)
  {
    const url = this.getUrl(urlParameter);
    let options = httpOptions;
    return this.httpClient.post(url, payload, options);
  }

  protected httpPut(payload: any, urlParameter?: string)
  {
    const url = this.getUrl(urlParameter);
    let options = httpOptions;
    return this.httpClient.put(url, payload, options);
  }

  protected httpDelete(urlParameter?: string)
  {
    const url = this.getUrl(urlParameter);
    let options = httpOptions;
    return this.httpClient.delete(url, options);
  }

  protected getUrl(urlParameter?: string) : string {
    if (urlParameter) {
      return `${this.accessPointUrl}/${this.controllerUrl}/${urlParameter}`;
    } else {
      return `${this.accessPointUrl}/${this.controllerUrl}`;
    }
    
  }

}
