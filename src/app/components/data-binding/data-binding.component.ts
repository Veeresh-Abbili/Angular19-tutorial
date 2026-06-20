import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [ FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
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
