import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from '../../../../services/crud.service';
import { ReusableComponent } from '../../../reusable-components/reusable/reusable.component';
@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule,ReusableComponent],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  parentProperty:string = "Add-User : Add User Information "


 addUserForm:FormGroup
  constructor(private router:Router,private fb:FormBuilder, private crud:CrudService){
    this.addUserForm = this.fb.group({
      name:[''],
      username:[''],
      email:['']
    })
  }

  onSubmit(){
    console.log(this.addUserForm.value);
    this.crud.postData(this.addUserForm.value).subscribe(res=>{
      this.router.navigateByUrl('crud');
    })
  }

  onCancel(){
    this.router.navigateByUrl('crud');
  }
}
