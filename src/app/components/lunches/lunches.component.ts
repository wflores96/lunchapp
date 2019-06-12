import { Component, OnInit } from '@angular/core';
import { events } from '../../data/data';
@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.css']
})
export class LunchesComponent implements OnInit {

  lunches = events;
  lunchDays = [
    {
      day:"Today",
      data: []
    },
    {
      day:"Tomorrow",
      data: []
    },
    {
      day:"Later",
      data: []
    }
  ]

  constructor() { }

  ngOnInit() {

    // assign today
    this.lunchDays[0].data = this.lunches.filter(lunch => {
      let today = new Date();
      
      return (lunch.time.getDate() == today.getDate()) 
      && 
      (lunch.time.getMonth() == today.getMonth())
      && 
      (lunch.time.getFullYear() == today.getFullYear())
    })

    // assign tomorrow
    this.lunchDays[1].data = this.lunches.filter(lunch => {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate()+1);
      return (lunch.time.getDate() == tomorrow.getDate())
      && 
      (lunch.time.getMonth() == tomorrow.getMonth())
      && 
      (lunch.time.getFullYear() == tomorrow.getFullYear())
    })

    // assign later
    this.lunchDays[2].data = this.lunches.filter(lunch => {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate()+1);

      return lunch.time > tomorrow;
    })
  }


}
