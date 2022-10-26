import { createAction, props, union } from '@ngrx/store';
import { Hero } from '../../models/hero';

export const getAll = createAction('[Heroes] GetAll');
export const getAllSuccess = createAction('[Heroes] GetAll Success', props<{ heroes: Hero[] }>());
export const updateHero = createAction('[Heroes] Update', props<{ hero: Hero }>());
export const deleteHero = createAction('[Heroes] Delete', props<{ id: string }>());
export const selectHero = createAction('[Heroes] Select', props<{ id: string }>());

const actions = union({
  getAll,
  updateHero,
  deleteHero,
  selectHero,
});

export type ActionUnion = typeof actions;
