import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CounterState } from '../store/counter/counter.reducer';
import { selectCount } from '../store/counter/counter.selector';
import * as CounterActions from '../store/counter/counter.actions';
import { CounterStoreModule } from '../components/counter/counter-store.module';

@Injectable({
  providedIn: CounterStoreModule,
})
export class CounterFacade {
  count$ = this.store.pipe(select(selectCount));

  constructor(private store: Store<CounterState>) {}

  increment(count: number): void {
    this.store.dispatch(CounterActions.increment({ count: count }));
  }

  decrement(count: number): void {
    this.store.dispatch(CounterActions.decrement({ count: count }));
  }

  reset(): void {
    this.store.dispatch(CounterActions.reset());
  }
}
