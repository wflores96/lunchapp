import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventGroupComponent } from './components/event-group/event-group.component';
import { CreatebuttonComponent } from './components/createbutton/createbutton.component';
import { HomeComponent } from './components/home/home.component';
import { LunchesComponent } from './components/lunches/lunches.component';

@NgModule({
  declarations: [
    AppComponent,
    EventCardComponent,
    EventGroupComponent,
    CreatebuttonComponent,
    HomeComponent,
    LunchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
