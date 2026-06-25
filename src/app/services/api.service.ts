import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url:string = "https://fake-json-api.mock.beeceptor.com";

  constructor(private http:HttpClient) { }

  // getAllData(){
  //   return this.http.get(`${this.base_url}/users`);
  // }

  // rxResourceData = rxResource({
  //   loader : () => this.http.get(`${this.base_url}/users`)
  // });

  resourceData = resource({
    loader : () => fetch(`${this.base_url}/users`).then(res=>res.json() as Promise<any>)
  })



}
