import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { HeroesFacade } from '../../../../services/heroes.facade';

@Component({
  selector: 'app-heroes-container',
  templateUrl: './heroes.container.html',
  styleUrls: ['./heroes.container.scss'],
})
export class HeroesContainer implements OnDestroy {
  private onDestory$ = new Subject<void>();

  ids$ = this.heroesFacade.ids$;

  constructor(private heroesFacade: HeroesFacade) {}

  ngOnDestroy(): void {
    this.onDestory$.next();
  }

  onGetAll(): void {
    this.heroesFacade.getAll();
  }
}
