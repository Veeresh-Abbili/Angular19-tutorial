import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.component.html',
  styleUrl: './attribute-directives.component.css'
})
export class AttributeDirectivesComponent {
  //1.dynamic class
  textColor: string = 'text-success';

  changeColor(color: string) {
    this.textColor = color;
  }

  //2.conditional class statement

  isTextColor: boolean = false;

  //3. custom class

  userClass: string = ''

  // styles

  //1st
  styleColor: string = ''
  updateColor(ngstyleColor: string) {
    this.styleColor = ngstyleColor;
  }
  //2nd
  isTextOrange: boolean = false;

  //3rd

  customClass:any = {
     'color':'pink',
     'height':'200px',
     'width':'400px',
     'border':'1px solid black'
  }

}
