import { Component, OnInit, NgZone } from '@angular/core';
import { ipcRenderer, IpcRendererEvent } from 'electron';
import { ChannelKey } from '../../common/channel-key';

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
    this.windowTitle = require('electron').remote.app.name;
    this.isMaximized = require('electron').remote.getCurrentWindow().isMaximized();

    ipcRenderer.on(ChannelKey.windowMaximize, (_event: IpcRendererEvent, isMaximized: boolean) => this.onWindowMaximize(isMaximized));
  }

  onCloseButtonClick(): void {
    ipcRenderer.send(ChannelKey.windowCloseRequest);
  }

  onMaximizeRestoreButtonClick(): void {
    ipcRenderer.send(ChannelKey.windowMaximizeRestoreRequest);
  }

  onMinimizeButtonClick(): void {
    ipcRenderer.send(ChannelKey.windowMinimizeRequest);
  }

  private onWindowMaximize(isMaximized: boolean): void {
    this.ngZone.run(() => {
      this.isMaximized = isMaximized;
    })
  }
}
