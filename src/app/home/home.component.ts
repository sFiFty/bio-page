import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() { }
  
  age: number;

  birthday: Date = new Date('11-03-1989');

  ngOnInit() {
    this.age = this.calculateAge(this.birthday);
  }

  calculateAge(birthday) {
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}
