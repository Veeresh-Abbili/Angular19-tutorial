import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-ngfor-vs-for',
  imports: [FormsModule,CommonModule],
  templateUrl: './structural-directive-ngfor-vs-for.component.html',
  styleUrl: './structural-directive-ngfor-vs-for.component.css'
})
export class StructuralDirectiveNgforVsForComponent {
  employees: any[] = [
    { empname: 'Ram', empnumber: '101', empemail: 'ram@gmail', empdep: 'IT' },
    { empname: 'Beem', empnumber: '102', empemail: 'beem@gmail', empdep: 'QA' },
    { empname: 'Veer', empnumber: '103', empemail: 'veer@gmail', empdep: 'QC' },
    { empname: 'Sai', empnumber: '104', empemail: 'sai@gmail', empdep: 'DE' }
  ]

  companyList:string[]=['tcs','accenture','infosys','capgemini','delotte','cognizant']
}
