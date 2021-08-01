import { createAction, props, union } from '@ngrx/store';

export const increment = createAction('[Counter] Increment', props<{ count: number }>());
export const decrement = createAction('[Counter] Decrement', props<{ count: number }>());
export const reset = createAction('[Counter] Reset');

const actions = union({
  increment,
  decrement,
  reset,
});

export type ActionsUnion = typeof actions;
