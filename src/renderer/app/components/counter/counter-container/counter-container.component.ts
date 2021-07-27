import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
})
export class CounterContainerComponent {
  count: number = 0;

  onIncreaseClick(value: number): void {
    this.count += value;
  }

  onDecreaseClick(value: number): void {
    this.count -= value;
  }

  onResetClick(): void {
    this.count = 0;
  }
}
