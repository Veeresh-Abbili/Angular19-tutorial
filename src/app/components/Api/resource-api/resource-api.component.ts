import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resource-api',
  imports: [CommonModule],
  templateUrl: './resource-api.component.html',
  styleUrl: './resource-api.component.css'
})
export class ResourceApiComponent implements OnInit {
  apiData : any
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    // this.apiService.getAllData().subscribe(res=>{
    //   this.apiData = res;
    // })
 
    //rxResource API:
    // this.apiData = this.apiService.rxResourceData;

    // resource API :
    this.apiData = this.apiService.resourceData;
  }





}
