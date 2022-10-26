import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroesFacade } from '../../../../services/heroes.facade';

@Component({
  selector: 'app-hero-item-container',
  templateUrl: './hero-item.container.html',
})
export class HeroItemContainer implements OnChanges {
  @Input() id: string = '';

  name$ = new BehaviorSubject<string>('').asObservable();
  selectedId$ = this.heroesFacade.selecedId$;

  constructor(private heroesFacade: HeroesFacade) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes.id) {
      this.name$ = this.heroesFacade.getName(this.id);
    }
  }

  onHeroesListSelectItem(id: string): void {
    this.heroesFacade.selectHero(id);
  }

  onHeroesListDeleteItem(id: string): void {
    this.heroesFacade.deleteHero(id);
  }
}
