import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { events } from '../../data/data';
@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.css']
})
export class LunchesComponent implements OnInit {

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

  constructor(public dataService: DataService) { }

  ngOnInit() {
    
    this.dataService.dataEmitter.subscribe((newData) => {

      console.log(newData);

      // assign today
    this.lunchDays[0].data = newData.filter(lunch => {
      let today = new Date();
      
      return (lunch.time.getDate() == today.getDate()) 
      && 
      (lunch.time.getMonth() == today.getMonth())
      && 
      (lunch.time.getFullYear() == today.getFullYear())
    })

    // assign tomorrow
    this.lunchDays[1].data = newData.filter(lunch => {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate()+1);
      return (lunch.time.getDate() == tomorrow.getDate())
      && 
      (lunch.time.getMonth() == tomorrow.getMonth())
      && 
      (lunch.time.getFullYear() == tomorrow.getFullYear())
    })

    // assign later
    this.lunchDays[2].data = newData.filter(lunch => {
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate()+1);
      tomorrow.setHours(23);
      tomorrow.setMinutes(59);
      tomorrow.setSeconds(59);

      return lunch.time > tomorrow;
    })
    })

    events.forEach(e => {
      this.dataService.emitHook(e);
    })
    
  }


}
