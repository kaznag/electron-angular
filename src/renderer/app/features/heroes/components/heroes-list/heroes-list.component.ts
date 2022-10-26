import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
})
export class HeroesListComponent {
  @Input() ids: string[] = [];
}
