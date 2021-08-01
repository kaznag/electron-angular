import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const featureName = 'counter';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state, { count }) => ({ ...state, count: state.count + count })),
  on(CounterActions.decrement, (state, { count }) => ({ ...state, count: state.count - count })),
  on(CounterActions.reset, (state) => ({ ...state, count: 0 }))
);
