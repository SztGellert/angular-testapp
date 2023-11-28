import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonsService} from "./persons.service";


@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent {
  personList: string[] = [];
  constructor(prsService: PersonsService) {
    this.personList = prsService.persons;
  }

}
