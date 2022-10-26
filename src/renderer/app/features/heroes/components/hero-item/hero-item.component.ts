import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hero-item',
  templateUrl: './hero-item.component.html',
  styleUrls: ['./hero-item.component.scss'],
})
export class HeroItemComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() selected: boolean = false;
  @Output() deleteItem = new EventEmitter<string>();
  @Output() selectItem = new EventEmitter<string>();
}
