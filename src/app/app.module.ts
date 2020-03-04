import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//import { AppComponent } from './app.component';
import { TickerTableComponent } from './tickertable.component'

@NgModule({
  declarations: [TickerTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [TickerTableComponent]
})
export class AppModule { }
