import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featureName, HeroesState } from './heroes.reducer';

export const selectHeroesState = createFeatureSelector<HeroesState>(featureName);

export const idsSelector = createSelector(selectHeroesState, (state) => state.ids);
export const nameSelector = (id: string) =>
  createSelector(selectHeroesState, (state) => {
    const hero = state.byId[id];
    return hero ? hero.name : '';
  });
export const selectedIdSelector = createSelector(selectHeroesState, (state) => {
  return state.ids.includes(state.selectedId) ? state.selectedId : '';
});
export const selectedHeroSelector = (id: string) =>
  createSelector(selectHeroesState, (state) => {
    const hero = state.byId[id];
    return hero ? hero : { id: '', name: '' };
  });
