import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesListComponent } from './components/houses-list/houses-list.component';
import { VisitListComponent } from './components/visit-list/visit-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HousesListComponent,
    VisitListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
