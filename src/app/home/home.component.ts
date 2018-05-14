import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { timeout } from 'q';

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
    print()
  }


  calculateAge(birthday) {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
