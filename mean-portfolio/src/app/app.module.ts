import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlazeSkillsComponent } from './components/blaze-skills/blaze-skills.component';
import { BlazeProjectsComponent } from './components/blaze-projects/blaze-projects.component';
import { BlazeContactComponent } from './components/blaze-contact/blaze-contact.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlazeSkillsComponent,
    BlazeProjectsComponent,
    BlazeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
