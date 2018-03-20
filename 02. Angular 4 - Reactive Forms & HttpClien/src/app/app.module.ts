import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DataService } from './services/data.service';
import { FormComponent } from './components/form/form.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FormComponent,
    EditContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
