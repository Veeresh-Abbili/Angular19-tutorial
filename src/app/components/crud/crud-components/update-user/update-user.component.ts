import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ReusableComponent } from '../../../reusable-components/reusable/reusable.component';
@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule,ReusableComponent],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {
    parentProperty:string = "Update-User : Please Update User Information "


  // for ui visible

  updateUserForm: FormGroup

  constructor(private crud: CrudService, private activRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: ['']
    })
  }




  // before update ui data 

  userData: any;
  userId!: {
    uid: number;
  }

  ngOnInit(): void {
    this.userId = {
      uid: this.activRoute.snapshot.params['id']
    }

    this.crud.getDataById(this.userId.uid).subscribe(res => {
      this.userData = res;

      this.updateUserForm.setValue({ id: this.userData.id, name: this.userData.name, username: this.userData.username, email: this.userData.email });

    })

  }

  onSubmit() {
    this.crud.putDataById(this.userId.uid, this.updateUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud');
    })
  }

  onCancel() {
    this.router.navigateByUrl('crud');
  }

}
