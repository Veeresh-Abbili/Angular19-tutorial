import { Component } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-dummy',
  imports: [],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css'
})
export class DummyComponent {
  
  sharedData:any
  isElegible:any
    constructor(private sharedDataService:SharedDataService){
      this.sharedData = this.sharedDataService.userData

      this.isElegible = this.sharedDataService.isElegibleForSubscription()
    }

}
