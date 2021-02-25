import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isFocused: boolean = false;
  isMaximized: boolean = false;
  windowTitle: string = '';

  constructor(
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    window.api.onWindowFocus(isFocused => this.onWindowFocus(isFocused));
    window.api.onWindowMaximize(isMaximize => this.onWindowMaximize(isMaximize));

    window.api.invokeWindowParameterRequest()
      .then(windowParameter => {
        this.isFocused = windowParameter.isFocused;
        this.isMaximized = windowParameter.isMaximized;
        this.windowTitle = windowParameter.title;

        window.api.sendWindowInitialized();
      });
  }

  onCloseButtonClick(): void {
    window.api.sendWindowCloseRequest();
  }

  onMaximizeResizeButtonClick(): void {
    window.api.sendWindowMaximizeRestoreRequest();
  }

  onMinimizeButtonClick(): void {
    window.api.sendWindowMinimizeRequest();
  }

  private onWindowFocus(isFocused: boolean): void {
    console.log(`onWindowFocus ${isFocused}`);
    this.ngZone.run(() => {
      this.isFocused = isFocused;
    });
  }

  private onWindowMaximize(isMaximized: boolean): void {
    this.ngZone.run(() => {
      this.isMaximized = isMaximized;
    });
  }
}
