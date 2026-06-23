import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  reactiveForm: FormGroup;

  // without formbuilder:

  // constructor() {
  //   this.reactiveForm = new FormGroup({
  //     firstName: new FormControl(''),
  //     lastName: new FormControl(''),
  //     email: new FormControl(''),
  //     password: new FormControl(),
  //     isChecked: new FormControl(),
  //     address: new FormGroup({
  //       city: new FormControl(''),
  //       street: new FormControl(''),
  //       pincode: new FormControl()
  //     })
  //   })
  //   //if we want to disable any value
  //   // this.reactiveForm.controls['isChecked'].disable();
  // }

  // with formbuilder:

  constructor(private fb: FormBuilder) {
    this.reactiveForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.maxLength(10), Validators.email]],
      password: ['', [Validators.required]],
      isChecked: [''],
      address: this.fb.group({
        city: [''],
        street: [''],
        pincode: ['']
      }),
      skills: this.fb.array([])
    });
  }

  get skills(): FormArray {
    return this.reactiveForm.get('skills') as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      // exp:'',
      // projects:''
    })
  }

  addSkill() {
    this.skills.push(this.newSkill());
  }

  deleteSkill(i: number) {
    this.skills.removeAt(i);
  }




  onSubmit() {
    console.log(this.reactiveForm.value)
  }

  setValues() {
    // with formbuilder
    this.skills.clear();

    this.skills.push(
      this.fb.group({
        skill: ['Angular']
      })
    );
    // without formbuilder
    this.reactiveForm.setValue({
      firstName: 'Veeresh',
      lastName: 'Abbili',
      email: 'abc@gmail.com',
      password: 1234,
      isChecked: true,
      address: {
        city: 'Hyderabad',
        street: 'Ramnagar',
        pincode: 518360
      },
      skills: [
        {
          skill: 'Angular'
        }
      ]
    });
  }

  resetValues() {
    this.reactiveForm.reset();
    // this.reactiveForm.controls['firstName'].reset();
  }

  setPartialValues() {
    this.reactiveForm.patchValue({
      address: {
        city: 'Hyderabad',
        street: 'Ramnagar',
        pincode: 518360
      }
    });
    // update single form value by using form controls
    // this.reactiveForm.controls['firstName'].patchValue('Veera')
  }



}
