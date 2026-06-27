import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReusableComponent } from '../../../reusable-components/reusable/reusable.component';

@Component({
  selector: 'app-view-user',
  imports: [ReusableComponent],
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css'
})
export class ViewUserComponent implements OnInit {
  parentProperty: string = "View-User : View User Information "


  constructor(private crud: CrudService, private activRoute: ActivatedRoute, private router: Router) { }

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
    })
  }

  onClose() {
    this.router.navigateByUrl('crud')
  }

}
