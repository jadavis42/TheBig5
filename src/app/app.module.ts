import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppComponent } from './app.component';
import { TickerTableComponent } from './tickertable.component'

@NgModule({
  declarations: [TickerTableComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [TickerTableComponent]
})
export class AppModule { }
