import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  API_URL = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getUserData(){
    return this.http.get(this.API_URL);
  }

   userData = {
      id: 1,
      name: 'Ram',
      userName: 'Ramesh',
      email: 'ram@gmail.com',
      Subscription:'basic'
    }

    isElegibleForSubscription(){
      if(this.userData.Subscription == 'basic' && this.userData.email.endsWith('@gmail.com')){
        return true;
      }else{
        return false;
      }
    }
    
}
