import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppDirective } from "app/app.directiva";
import { SelectorDirective } from './selector.directive';

@NgModule({
  declarations: [
	AppComponent,
	AppDirective,
	SelectorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
