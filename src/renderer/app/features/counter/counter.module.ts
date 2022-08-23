import { NgModule } from '@angular/core';
import { CounterStoreModule } from './counter-store.module';
import { CommonModule } from '@angular/common';
import { CounterContainerComponent } from './containers';
import { CounterComponent } from './components';

@NgModule({
  declarations: [CounterContainerComponent, CounterComponent],
  imports: [CommonModule, CounterStoreModule],
  exports: [CounterContainerComponent],
})
export class CounterModule {}
