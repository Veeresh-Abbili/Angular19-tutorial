import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CustomPipe } from '../custom.pipe';
import { PurePipe } from '../pure.pipe';
import { ImpurePipe } from '../impure.pipe';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule,CustomPipe,PurePipe,ImpurePipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.css'
})
export class BuiltInPipesComponent {

// mobileNumber:any = 7702448259
// mobileNumber:any = null
mobileNumber:any = undefined


angularPipes:string='pipes are used to format data in angular templates';
 
personData={
  name:'Veeresh',
  age:'30',
  city:'Hyderabad'
}

currentDate = new Date

items = of(['mango','banana','orange','grapes'])

}
