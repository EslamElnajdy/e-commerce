import { HttpClient } from '@angular/common/http';
import { Injectable, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }
  getdata(): Observable<[]>{
    return this.http.get<[]>('./assets/data.json')
  }
}
