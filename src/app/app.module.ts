import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PersonsComponent} from "./persons/persons.component";
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {PersonInputComponent} from "./persons/person-input.component";
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [PersonInputComponent, HttpClientModule],
  imports: [BrowserModule, PersonsComponent, CommonModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
