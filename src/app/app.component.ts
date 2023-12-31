import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {PersonsComponent} from "./persons/persons.component";
import {PersonInputComponent} from "./persons/person-input.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PersonsComponent, PersonInputComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-testapp';

}
