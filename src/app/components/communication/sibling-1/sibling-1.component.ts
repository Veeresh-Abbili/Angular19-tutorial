import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sibling-1',
  imports: [],
  templateUrl: './sibling-1.component.html',
  styleUrl: './sibling-1.component.css'
})
export class Sibling1Component {

  @Output() siblingEvent1 = new EventEmitter<any>()

  @Input() sibling1InputData:string=""

  onSubmit(data:any){
    this.siblingEvent1.emit(data)
  }
}
