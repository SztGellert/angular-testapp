import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonsService} from "./persons.service";


@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent implements OnInit{
  personList: string[] = [];

  constructor(private prsService: PersonsService) {
  }

  ngOnInit() {
    this.personList = this.prsService.persons;
  }

}
