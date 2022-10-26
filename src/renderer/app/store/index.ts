import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterState } from './counter/counter.reducer';
import { heroesReducer, HeroesState } from './heroes/heroes.reducer';

export interface RootState {
  counter: CounterState;
  heroes: HeroesState;
}

export const appReducers: ActionReducerMap<RootState> = {
  counter: counterReducer,
  heroes: heroesReducer,
};
