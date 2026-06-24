import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  sharedData:any
  isElegible:any
  apiData:any
  constructor(private sharedDataService:SharedDataService) {
    this.sharedData = this.sharedDataService.userData

    this.isElegible = this.sharedDataService.isElegibleForSubscription()
  }

  ngOnInit():void{
    this.userData();
  }

  userData(){
    this.sharedDataService.getUserData().subscribe(res=>{
      this.apiData = res;
    })
  }





 
  // data from component level

  // sharedData={
  //   id:1,
  //   name:'Ram',
  //   userName:'Ramesh',
  //   email:'ram@gmail.com'
  // }

}
