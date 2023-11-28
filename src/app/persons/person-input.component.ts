import {Component, Output, EventEmitter} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: "app-person-input",
  templateUrl: './person-input.component.html',
  imports: [CommonModule, FormsModule],
  standalone: true,
  styleUrls: ['./person-input.component.css']
})

export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<string>();
  enteredPersonName = '';
  onCreatePerson() {
    console.log(this.enteredPersonName);
    this.personCreate.emit(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
