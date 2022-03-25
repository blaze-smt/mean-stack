import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlazeHomeComponent } from './components/blaze-home/blaze-home.component';
import { BlazeSkillsComponent } from './components/blaze-skills/blaze-skills.component';
import { BlazeProjectsComponent } from './components/blaze-projects/blaze-projects.component';
import { BlazeContactComponent } from './components/blaze-contact/blaze-contact.component';
import { BlazeErrorComponent } from './components/blaze-error/blaze-error.component';
import { FormsModule }   from '@angular/forms';

// Routes
const routes: Routes = [
  {path: 'home', component: BlazeHomeComponent},
  {path: 'skills', component: BlazeSkillsComponent},
  {path: 'projects', component: BlazeProjectsComponent},
  {path: 'contact', component: BlazeContactComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: BlazeErrorComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BlazeHomeComponent,
    BlazeSkillsComponent,
    BlazeProjectsComponent,
    BlazeContactComponent,
    BlazeErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
