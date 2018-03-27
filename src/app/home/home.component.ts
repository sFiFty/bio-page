import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number;

  btnTxt: string = 'Add an item';

  goalTxt: string = 'My first life goal';

  goals = [];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem() {
    this.goals.push(this.goalTxt);
    this.goalTxt = '';
    this.itemCount = this.goals.length;
  }

}
