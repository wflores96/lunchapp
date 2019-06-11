import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.css']
})
export class LunchesComponent implements OnInit {

  lunchDates = ['Today', 'Tomorrow','Later'];

  constructor() { }

  ngOnInit() {
    console.log(localStorage.getItem('name'));
  }

}
