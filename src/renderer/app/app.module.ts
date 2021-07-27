import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { CounterModule } from './components/counter/counter.module';
import { TitleBarComponent } from './components/title-bar/title-bar.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './locales/', '.json');
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    CounterModule,
  ],
  declarations: [AppComponent, TitleBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
