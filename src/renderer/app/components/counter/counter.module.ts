import { NgModule } from '@angular/core';
import { CounterContainerComponent } from './counter-container/counter-container.component';
import { CounterComponent } from './counter/counter.component';
import { CounterStoreModule } from './counter-store.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CounterContainerComponent, CounterComponent],
  imports: [CommonModule, CounterStoreModule],
  exports: [CounterContainerComponent],
})
export class CounterModule {}
