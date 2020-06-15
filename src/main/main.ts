import { app, ipcMain } from 'electron'
import { MainWindow } from './main-window';
import { ApplicationSettings } from './application-settings';
import { ChannelKey } from '../common/channel-key';

class Application {

  private mainWindow: MainWindow | null = null;

  private appSettings: ApplicationSettings | null = null;

  constructor(public app: Electron.App) {
    if (!this.app.requestSingleInstanceLock()) {
      this.app.quit();
    }

    this.appSettings = new ApplicationSettings();

    this.app.on('ready', () => this.onReady());
    this.app.on('window-all-closed', () => this.onWindowAllClosed());
    this.app.on('second-instance', () => this.onSecondInstance());

    ipcMain.on(ChannelKey.windowCloseRequest, () => this.mainWindow!.close());
    ipcMain.on(ChannelKey.windowMaximizeRestoreRequest, () => this.mainWindow!.maximizeRestore());
    ipcMain.on(ChannelKey.windowMinimizeRequest, () => this.mainWindow!.minimize());
  }

  private onReady(): void {
    this.mainWindow = new MainWindow(this.appSettings!);

    this.mainWindow.on('maximize', () => this.onWindowMaximize());
    this.mainWindow.on('unmaximize', () => this.onWindowUnmaximize());

    this.mainWindow.show();
  }

  private onWindowAllClosed(): void {
    if (process.platform != 'darwin') {
      this.app.quit();
    }
  }

  private onSecondInstance(): void {
    if (this.mainWindow) {
      this.mainWindow.show();
    }
  }

  private onWindowMaximize(): void {
    this.sendWindowMaximize(true);
  }

  private onWindowUnmaximize(): void {
    this.sendWindowMaximize(false);
  }

  private sendWindowMaximize(isMaximized: boolean): void {
    this.mainWindow!.send(ChannelKey.windowMaximize, isMaximized);
  }
}

new Application(app);
