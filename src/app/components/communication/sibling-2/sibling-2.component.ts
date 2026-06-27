import { Component,EventEmitter,Input,Output} from '@angular/core';

@Component({
  selector: 'app-sibling-2',
  imports: [],
  templateUrl: './sibling-2.component.html',
  styleUrl: './sibling-2.component.css'
})
export class Sibling2Component {

  @Input() sibling2InputData:string=""

  @Output() siblingEvent2 = new EventEmitter<any>(); 

  onSubmit(data:any){
    this.siblingEvent2.emit(data);
  }
  
}
