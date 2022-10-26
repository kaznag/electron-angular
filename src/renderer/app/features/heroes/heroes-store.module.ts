import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { featureName, heroesReducer } from '../../store/heroes/heroes.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      [featureName]: heroesReducer,
    }),
  ],
  exports: [],
})
export class HeroesStoreModule {}
