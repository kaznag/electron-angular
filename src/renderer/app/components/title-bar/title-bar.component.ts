import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {

  @Input() windowTitle: string = '';
  @Input() isMaximized: boolean = false;

  @Output() closeButtonClick = new EventEmitter<void>();
  @Output() maximizeRestoreButtonClick = new EventEmitter<void>();
  @Output() minimizeButtonClick = new EventEmitter<void>();
}
