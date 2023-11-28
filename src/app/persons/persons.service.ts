import {Injectable} from "@angular/core";
import {map, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class PersonsService{
  personsChanged = new Subject<string[]>();
  persons: string[] = ["Max", "Manuel", 'Anna']

  constructor(private http: HttpClient) {



  }

  fetchPersons() {
    this.http.get<any>('https://swapi.co/api/people').pipe(map((resData => {
      // @ts-ignore
      return resData.results.map(character => character.name)
    }))).subscribe(transformedData => {
    this.personsChanged.next(transformedData);
  });
  }

  addPerson(name:string){
    this.persons.push(name);
    this.personsChanged.next(this.persons)
    console.log(this.persons)
  }
  removePersons(name:string){
    this.persons = this.persons.filter(person => {
      return person !== name;
    })
    this.personsChanged.next(this.persons)
    console.log(this.persons)
  }

}
