import { Component } from '@angular/core';
import { CounterFacade } from '../../../../services/counter.facade';

@Component({
  selector: 'app-counter-container',
  templateUrl: './counter-container.component.html',
})
export class CounterContainerComponent {
  count$ = this.counterFacade.count$;

  constructor(private counterFacade: CounterFacade) {}

  onIncrementClick(value: number): void {
    this.counterFacade.increment(value);
  }

  onDecrementClick(value: number): void {
    this.counterFacade.decrement(value);
  }

  onResetClick(): void {
    this.counterFacade.reset();
  }
}
