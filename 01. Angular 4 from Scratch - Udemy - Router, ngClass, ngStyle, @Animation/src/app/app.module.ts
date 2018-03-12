import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'ng-class', component: NgClassComponent },
    { path: '**', component: NotFoundComponent  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    NgClassComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
