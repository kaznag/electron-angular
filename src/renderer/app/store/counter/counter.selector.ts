import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState, featureName } from './counter.reducer';

export const selectCounterState = createFeatureSelector<CounterState>(featureName);
export const selectCount = createSelector(selectCounterState, (state) => state.count);
