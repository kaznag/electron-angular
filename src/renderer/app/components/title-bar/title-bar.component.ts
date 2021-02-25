import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {

  @Input() isFocused: boolean = true;
  @Input() isMaximized: boolean = false;
  @Input() windowTitle: string = '';

  @Output() onCloseButtonClick = new EventEmitter<void>();
  @Output() onMaximizeResizeButtonClick = new EventEmitter<void>();
  @Output() onMinimizeButtonClick = new EventEmitter<void>();
}
