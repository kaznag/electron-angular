import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heroes-menu',
  templateUrl: './heroes-menu.component.html',
})
export class HeroesMenuComponent {
  @Output() getAll = new EventEmitter<void>();
}
