import { Component, ViewEncapsulation } from '@angular/core';
import { ViewEncapsulate2Component } from '../view-encapsulate2/view-encapsulate2.component';

@Component({
  selector: 'app-view-encapsulate1',
  imports: [ViewEncapsulate2Component],
  templateUrl: './view-encapsulate1.component.html',
  styleUrl: './view-encapsulate1.component.css',
  // encapsulation:ViewEncapsulation.None
    // encapsulation:ViewEncapsulation.ShadowDom

})
export class ViewEncapsulate1Component {

}
