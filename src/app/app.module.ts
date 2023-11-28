import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PersonsComponent} from "./persons/persons.component";
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import {PersonInputComponent} from "./persons/person-input.component";
import {FormsModule} from "@angular/forms";
@NgModule({
  declarations: [PersonInputComponent],
  imports: [BrowserModule, PersonsComponent, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {}
