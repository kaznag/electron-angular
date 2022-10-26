import { createReducer, on } from '@ngrx/store';
import { Hero } from '../../models/hero';
import * as HeroesActions from './heroes.actions';

export const featureName = 'heroes';

export interface HeroesState {
  ids: string[];
  byId: Record<string, Hero>;
  selectedId: string;
}

export const initialState: HeroesState = {
  ids: [],
  byId: {},
  selectedId: '',
};

export const heroesReducer = createReducer(
  initialState,
  on(HeroesActions.selectHero, (state, { id }) => {
    const selectedId = state.ids.includes(id) ? id : '';

    return {
      ...state,
      selectedId: state.selectedId !== selectedId ? selectedId : '',
    };
  }),
  on(HeroesActions.updateHero, (state, { hero }) => ({
    ...state,
    byId: { ...state.byId, [hero.id]: { ...hero } },
  })),
  on(HeroesActions.deleteHero, (state, { id }) => ({
    ...state,
    ids: state.ids.filter((o) => o !== id),
    selectedId: state.selectedId === id ? '' : state.selectedId,
  })),
  on(HeroesActions.getAllSuccess, (state, { heroes }) => {
    const ids = heroes.map((o) => o.id);
    const byId = heroes.reduce((acc, hero) => ({ ...acc, [hero.id]: hero }), {});

    return {
      ...state,
      ids: ids,
      byId: byId,
      selectedId: '',
    };
  })
);
