import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PerpertyListingComponent } from './property-listing/property-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    PerpertyListingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
