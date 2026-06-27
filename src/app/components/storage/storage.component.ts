import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-storage',
  imports: [],
  providers: [CookieService],
  templateUrl: './storage.component.html',
  styleUrl: './storage.component.css'
})
export class StorageComponent {

  constructor(private cookie: CookieService) { }

  // sessionStorage :
  sessionValue: string | null = "";

  setSession() {
    sessionStorage.setItem('name', 'session');
    sessionStorage.setItem('pass', 'session123');
  }

  getSession() {
    this.sessionValue = sessionStorage.getItem('name');
  }

  removeSession() {
    sessionStorage.removeItem('name');
  }

  clearSession() {
    sessionStorage.clear();
    this.sessionValue = "";
  }

  // localStorage :

  localValue: string | null = "";
  setLocal() {
    localStorage.setItem('username', 'user');
    localStorage.setItem('password', 'pass123');
  }

  getLocal() {
    this.localValue = localStorage.getItem('username');
  }

  removeLocal() {
    localStorage.removeItem('password');
  }

  clearLocal() {
    localStorage.clear();
    this.localValue = "";
  }

  // Cookie-Storage

  cookieValue: string = "";
  setCookie() {
    this.cookie.set('token1', '12345',1);
    this.cookie.set('token2', 'xyz');
  }

  getCookie() {
     this.cookieValue = this.cookie.get('token1');
  }

  removeCookie() {
    //  this.cookie.delete('token1');
     this.cookie.deleteAll();
    this.cookieValue ="";
  }

}
