import { Component,computed,linkedSignal,signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
 
  quantitySignal = signal(1);
   price = 10;
  //  total = computed(()=>{
  //   return this.quantitySignal() * this.price;
  //  })


  // shorthand syntax for linked signals
  //   total = linkedSignal(()=>{
  //   return this.quantitySignal() * this.price;
  //  })
  

   // source & computation for linked signals

   total = linkedSignal({
     source: this.quantitySignal,
     computation:()=>this.quantitySignal() * this.price,
    //  equal:(a:any,b:any)=> a === b            // optional
   })

   calculate(){
    this.quantitySignal.set(20);
   }

}
