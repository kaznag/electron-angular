import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  windowTitle: string = '';
  isMaximized: boolean = false;

  constructor(
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    window.api.onWindowMaximize(isMaximize => this.onWindowMaximize(isMaximize));

    window.api.invokeWindowParameterRequest()
      .then(windowParameter => {
        this.isMaximized = windowParameter.isMaximized;
        this.windowTitle = windowParameter.title;

        window.api.sendWindowInitialized();
      });
  }

  onCloseButtonClick(): void {
    window.api.sendWindowCloseRequest();
  }

  onMaximizeRestoreButtonClick(): void {
    window.api.sendWindowMaximizeRestoreRequest();
  }

  onMinimizeButtonClick(): void {
    window.api.sendWindowMinimizeRequest();
  }

  private onWindowMaximize(isMaximized: boolean): void {
    this.ngZone.run(() => {
      this.isMaximized = isMaximized;
    })
  }
}
