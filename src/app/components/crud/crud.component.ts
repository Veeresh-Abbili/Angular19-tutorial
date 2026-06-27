import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { Iuser } from '../../models/iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ReusableComponent } from "../reusable-components/reusable/reusable.component";
@Component({
  selector: 'app-crud',
  imports: [CommonModule, ReusableComponent],
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css'
})
export class CrudComponent {
  parentProperty:string = "CRUD Operations : User Information "

  apiData: Iuser[] = [];

  constructor(private crud: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.crud.getData().subscribe(res => {
      this.apiData = res;
    })
  }

  addNewUser() {
    this.router.navigateByUrl('add-user');
  }

  onUpadate(id: number) {
    this.router.navigate(['update-user', id])
  }

  onView(id: number) {
    this.router.navigate(['view-user', id])
  }

  onDelete(id: number) {
    this.crud.deleteData(id).subscribe(res => {
      alert('Record Deleted Successfully')
      this.getAllData();
    })
  }

}
