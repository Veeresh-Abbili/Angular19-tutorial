import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable.component.html',
  styleUrl: './reusable.component.css'
})
export class ReusableComponent {
@Input() childProperty:string = "Hi : this is reusable component !";

}
