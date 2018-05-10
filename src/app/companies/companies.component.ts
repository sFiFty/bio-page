import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  companyExpanded: boolean =  false;

  constructor() { }

  onExpand = () => {
    console.log(this.companyExpanded);
    this.companyExpanded = true;
  }

  ngOnInit() {
  }

}
