import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PersonsService} from "./persons.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-persons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './persons.component.html',
  styleUrl: './persons.component.css'
})
export class PersonsComponent implements OnInit, OnDestroy {
  personList: string[] = [];
  private personListSubs: Subscription = new Subscription;
  isFetching = false;
  constructor(private prsService: PersonsService) {
  }

  ngOnInit() {
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching =false;
      }
    );
    this.isFetching = true;
    this.prsService.fetchPersons();

  }

  ngOnDestroy() {
   this.personListSubs.unsubscribe();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePersons(personName);
  }

}
