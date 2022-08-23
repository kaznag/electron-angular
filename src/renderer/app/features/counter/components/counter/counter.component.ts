import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  @Input() count: number = 0;

  @Output() incrementClick = new EventEmitter<number>();
  @Output() decrementClick = new EventEmitter<number>();
  @Output() resetClick = new EventEmitter<void>();
}
