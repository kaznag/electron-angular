import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { HeroesService } from '../../services/heroes.service';
import * as HeroesActions from './heroes.actions';

@Injectable()
export class HeroesEffects {
  constructor(private actions$: Actions, private heroesService: HeroesService) {}

  loadAll$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(HeroesActions.getAll),
      mergeMap(() =>
        this.heroesService
          .getAll()
          .pipe(map((heroes) => HeroesActions.getAllSuccess({ heroes: heroes })))
      )
    );
  });
}
