import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { counterReducer, featureName } from '../../store/counter/counter.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      [featureName]: counterReducer,
    }),
  ],
  exports: [],
})
export class CounterStoreModule {}
