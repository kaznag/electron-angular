import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import * as HeroesActions from '../store/heroes/heroes.actions';
import { HeroesState } from '../store/heroes/heroes.reducer';
import {
  idsSelector,
  nameSelector,
  selectedHeroSelector,
  selectedIdSelector,
} from '../store/heroes/heroes.selector';

@Injectable({
  providedIn: 'root',
})
export class HeroesFacade {
  selecedId$ = this.store.pipe(select(selectedIdSelector));
  ids$ = this.store.pipe(select(idsSelector));

  constructor(private store: Store<HeroesState>) {}

  getName(id: string): Observable<string> {
    return this.store.pipe(select(nameSelector(id)));
  }

  getHero(id: string): Observable<Hero> {
    return this.store.pipe(select(selectedHeroSelector(id)));
  }

  getAll(): void {
    this.store.dispatch(HeroesActions.getAll());
  }

  updateHero(hero: Hero): void {
    this.store.dispatch(HeroesActions.updateHero({ hero }));
  }

  deleteHero(id: string): void {
    this.store.dispatch(HeroesActions.deleteHero({ id }));
  }

  selectHero(id: string): void {
    this.store.dispatch(HeroesActions.selectHero({ id }));
  }
}
