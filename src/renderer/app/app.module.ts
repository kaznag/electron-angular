import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { CounterModule } from './features/counter/counter.module';
import { TitleBarComponent } from './features/title-bar';

const extModules = !environment.production ? [StoreDevtoolsModule.instrument()] : [];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './locales/', '.json');
}

const importModules = [
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
];

importModules.push(...extModules);
@NgModule({
  imports: importModules,
  declarations: [AppComponent, TitleBarComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
