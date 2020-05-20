import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexModule } from '../pages/index/index.module';
import { DirectionsModule } from 'src/directions/directions.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndexModule,
    DirectionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
