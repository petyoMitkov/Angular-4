import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { AppRoutingModule }     from './app-routing.module';
import { NgStyleComponent } from './components/ng-style/ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NgClassComponent,
    NotFoundComponent,
    NgStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
