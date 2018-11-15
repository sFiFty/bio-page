import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { format, getTime, getYear } from 'date-fns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor() { }
  age: number;

  birthday: Date = new Date('11-03-1989');

  ngOnInit() {
    this.age = this.calculateAge(this.birthday);
  }

  onPrint() {
    print();
  }


  calculateAge(birthday) {
    let currentTime = getTime(Date.now());
    let birthdayTime = getTime(birthday);
    let ageDifMs = currentTime - birthdayTime;
    let ageDate = format(ageDifMs);
    return Math.abs(getYear(format(ageDate)) - 1970) || 27;
  }
}
