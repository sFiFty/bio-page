import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompaniesComponent implements OnInit {

  companiesExpanded: object = {
    '3shape': false,
    'decorist': false,
    'codemotion': false
  };

  constructor() { }

  onExpand = company => {
    this.companiesExpanded[company] = !this.companiesExpanded[company];
  }

  ngOnInit() {
  }

}
