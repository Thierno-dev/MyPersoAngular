
import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaPhotoStatiqueComponent } from './ma-photo-statique/ma-photo-statique.component';
import { Maphotodynamique1Component } from './maphotodynamique1/maphotodynamique1.component';
import { MaListePhoto1Component } from './ma-liste-photo1/ma-liste-photo1.component';
import { registerLocaleData } from '@angular/common';

import * as fr from '@angular/common/locales/fr'

@NgModule({
  declarations: [
    AppComponent,
    MaPhotoStatiqueComponent,
    Maphotodynamique1Component,
    MaListePhoto1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule {

    constructor(){
      registerLocaleData(fr.default);
    }
 }
