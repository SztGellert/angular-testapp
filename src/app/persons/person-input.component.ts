import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {PersonsService} from "./persons.service";

@Component({
  selector: "app-person-input",
  templateUrl: './person-input.component.html',
  imports: [CommonModule, FormsModule],
  standalone: true,
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private prsService: PersonsService) {
  }
  onCreatePerson() {
    console.log(this.enteredPersonName);
    this.prsService.addPerson(this.enteredPersonName)
    this.enteredPersonName = '';
  }
}
