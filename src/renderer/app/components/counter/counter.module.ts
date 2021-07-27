import { NgModule } from '@angular/core';
import { CounterContainerComponent } from './counter-container/counter-container.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [CounterContainerComponent, CounterComponent],
  imports: [],
  exports: [CounterContainerComponent],
})
export class CounterModule {}
