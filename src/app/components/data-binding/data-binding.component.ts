import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ViewEncapsulate1Component } from '../view-encapsulate1/view-encapsulate1.component';
import { ViewEncapsulate2Component } from '../view-encapsulate2/view-encapsulate2.component';

@Component({
  selector: 'app-data-binding',
  imports: [ FormsModule, ViewEncapsulate1Component,ViewEncapsulate2Component],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
  encapsulation : ViewEncapsulation.ShadowDom
})
export class DataBindingComponent {
name:string="Veeresh";
topic:string="angular19-tutorial";

value:string="property-binding"
image:string="https://img.magnific.com/free-photo/courage-man-jump-through-gap-hill-business-concept-idea_1323-262.jpg?semt=ais_hybrid&w=740&q=80"

towayData:string="Two Way Data Binding"

save(){
  alert('Save Data Successfully')
}
changeCountry(){
  alert('Country Name Changed');
}

}




