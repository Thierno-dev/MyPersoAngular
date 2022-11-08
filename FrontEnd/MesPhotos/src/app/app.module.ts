import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaPhotoStatiqueComponent } from './ma-photo-statique/ma-photo-statique.component';
import { Maphotodynamique1Component } from './maphotodynamique1/maphotodynamique1.component';

@NgModule({
  declarations: [
    AppComponent,
    MaPhotoStatiqueComponent,
    Maphotodynamique1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
