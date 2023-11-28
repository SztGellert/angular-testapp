import {Component} from "@angular/core";
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
  enteredPersonName = '';
  onCreatePerson() {
    console.log(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
