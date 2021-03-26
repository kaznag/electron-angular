import { Component, OnInit, NgZone } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../common/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private language: string = '';

  isFocused: boolean = false;
  isMaximized: boolean = false;
  windowTitle: string = '';
  supportLanguages: Language[] = [];

  constructor(
    private ngZone: NgZone,
    private translate: TranslateService,
  ) { }

  ngOnInit(): void {
    window.api.onWindowFocus(isFocused => this.onWindowFocus(isFocused));
    window.api.onWindowMaximize(isMaximize => this.onWindowMaximize(isMaximize));

    window.api.invokeWindowParameterRequest()
      .then(windowParameter => {
        this.isFocused = windowParameter.isFocused;
        this.isMaximized = windowParameter.isMaximized;
        this.translate.setDefaultLang(windowParameter.language);
        this.supportLanguages = windowParameter.supportLanguages;
        this.changeLanguage(windowParameter.language);
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

  changeLanguage(language: string): void {
    if (language !== this.language) {
      this.language = language;
      this.translate.use(this.language);
      window.api.sendChangeLanguage(this.language);
    }
  }

  equalLanguage(language: string): boolean {
    return language === this.language;
  }

  private onWindowFocus(isFocused: boolean): void {
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
