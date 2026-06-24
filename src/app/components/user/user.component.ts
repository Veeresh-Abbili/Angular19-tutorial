import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, RouterLink } from "@angular/router";
import { DummyComponent } from '../dummy/dummy.component';

@Component({
  selector: 'app-user',
  imports: [DummyComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnChanges, OnInit, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{

  constructor(private router:Router){
    console.log('constructor called');
  }

   ngOnChanges(changes: SimpleChanges): void {
     console.log('1.ng onChanges called');
   }

   ngOnInit(): void {
    // use for API Call
     console.log('2.ngOnint called');
   }

   ngDoCheck(): void {
    // Use for Every Change Detection
     console.log('3.ngDocheck called');
   }

   ngAfterContentInit(): void {
    //Use For ng-Content
     console.log('4.ngAfterContentInit called');
   }

   ngAfterContentChecked(): void {
     console.log('5.ngAfterContentChecked Called');
   }
   ngAfterViewInit(): void {
    //Use For ViewChild
     console.log('6.ngAfterViewInit called');
   }
   ngAfterViewChecked(): void {
    
     console.log('7.ngAfterViewInitChecked');
   }
   ngOnDestroy(){
      console.log('8.ngOnDestroy Called');
   }


  login(){
    // user verification logic
    // this.router.navigateByUrl('data-binding');
    this.router.navigate(['data-binding']);
  }


}
