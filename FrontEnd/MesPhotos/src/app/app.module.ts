import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaPhotoStatiqueComponent } from './ma-photo-statique/ma-photo-statique.component';

@NgModule({
  declarations: [
    AppComponent,
    MaPhotoStatiqueComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
