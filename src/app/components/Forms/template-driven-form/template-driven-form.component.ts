import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../../models/user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent implements OnInit {
  userObject: User = {};

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
  }

  ngOnInit(): void {
    // this.userObject = {
    //   firstName:'Veeresh',
    //   lastName: 'Abbili',
    //   email: 'abc@gmail',
    //   pass: '1234',
    //   isCheck: true
    // }
  }

  setValues(userForm:NgForm){
     let Obj ={
       firstName:'Veeresh',
       lastName:'Abbili',
       email:'abc@gmail',
       pass:'1234',
       isCheck:true
     }
     userForm.setValue(Obj);
  }

  patchValues(userForm:NgForm){
     let Obj = {
      firstName:'Veeresh',
       lastName:'Abbili',
       email:'abc@gmail',
     }
     userForm.control.patchValue(Obj);
  }

  resetValues(userForm:NgForm){
    // userForm.reset();
    userForm.resetForm();
  }
}
