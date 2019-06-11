import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventGroupComponent } from './components/event-group/event-group.component';
import { CreatebuttonComponent } from './createbutton/createbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventGroupComponent,
    CreatebuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
