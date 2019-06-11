import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventGroupComponent } from './components/event-group/event-group.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
