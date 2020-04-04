import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  mockCCS = [
    {
      id: 1,
      name: 'test'
    },
    {
      id: 2,
      name: 'test2'
    }
  ];

  constructor(private http: HttpClient) { }
  // constructor() { }

  getConcreteConstructionSite() {
    return this.http.get('http://192.168.178.36:8080/concreteConstructionSiteList');
    // return this.mockCCS;
  }
}
