import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { HeroesEffects } from '../../store/heroes/heroes.effects';
import { HeroesListComponent, HeroesMenuComponent, HeroItemComponent } from './components';
import { HeroesContainer, HeroItemContainer } from './containers';
import { HeroesStoreModule } from './heroes-store.module';

@NgModule({
  imports: [CommonModule, HeroesStoreModule, EffectsModule.forRoot([HeroesEffects])],
  declarations: [
    HeroItemContainer,
    HeroesContainer,
    HeroItemComponent,
    HeroesListComponent,
    HeroesMenuComponent,
  ],
  exports: [HeroesContainer],
})
export class HeroesModule {}
