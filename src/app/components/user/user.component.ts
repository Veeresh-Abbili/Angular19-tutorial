import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  constructor(private router:Router){}

  login(){
    // user verification logic
    // this.router.navigateByUrl('data-binding');
    this.router.navigate(['data-binding']);
  }


}
