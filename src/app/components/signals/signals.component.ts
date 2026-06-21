import { ChangeDetectionStrategy, Component, computed, effect, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {

  normalCounter = 0;

  counter = signal(0);
  // counter:WritableSignal<number> = signal(0);

  doubleCounter = computed(() => this.counter() * 2)

  constructor() {
    this.counter.set(5);
    // setTimeout(() => {
    //   this.normalCounter = 60;
    //   this.counter.set(30);
    //   console.log('counter value:' + this.normalCounter)
    // }, 5000);

    effect(()=>console.log('The Value of Counter :' + this.counter()))

  }
  increment() {
    this.counter.update(initialValue => initialValue + 1);
  }

}
