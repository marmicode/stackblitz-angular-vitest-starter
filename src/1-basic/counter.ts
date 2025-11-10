import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-counter',
  template: `
    <p>{{ count() }}</p>
    <button aria-label="Increment" (click)="increment()">+</button>
    <button aria-label="Decrement" (click)="decrement()">-</button>
  `,
})
export class Counter {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }

  decrement() {
    this.count.update((count) => count - 1);
  }
}
