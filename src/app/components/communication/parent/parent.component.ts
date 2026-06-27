import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { Sibling1Component } from '../sibling-1/sibling-1.component';
import { Sibling2Component } from '../sibling-2/sibling-2.component';
import { ReusableComponent } from "../../reusable-components/reusable/reusable.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent, Sibling1Component, Sibling2Component, ReusableComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements AfterViewInit {

  ParentProperty: string = "This is parent component data"

  @ViewChild('reusable') reusableComp!: ReusableComponent;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.reusableComp.childProperty = "Greetings from parent component"

    })           // why because already it is a parent to child sent property
  }

  recievedMessage: any
  recieveData(data: any) {
    this.recievedMessage = data;
  }

  sibling2Data: any
  recieveEvent1(data: any) {
    this.sibling2Data = data;
    console.log(this.sibling2Data);
  }

  sibling1Data: any
  recieveEvent2(data: any) {
    this.sibling1Data = data;
  }

}
