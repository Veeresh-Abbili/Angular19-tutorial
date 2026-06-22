import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css'
})
export class BuiltInPipesComponent {
angularPipes:string='pipes are used to format data in angular templates';
 
personData={
  name:'Veeresh',
  age:'30',
  city:'Hyderabad'
}

currentDate = new Date

items = of(['mango','banana','orange','grapes'])

}
