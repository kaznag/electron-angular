import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    TitleBarComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
