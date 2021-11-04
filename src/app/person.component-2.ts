import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-person-2',
  templateUrl: 'person.component-2.html'
})
export class PersonComponent2 {
  personName = new FormControl();
  personAge = new FormControl();
} 