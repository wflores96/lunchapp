import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { events } from '../../data/data';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-lunches',
  templateUrl: './lunches.component.html',
  styleUrls: ['./lunches.component.css']
})
export class LunchesComponent implements OnInit, OnDestroy {

  lunchDays = [
    {
      day: "Today",
      data: []
    },
    {
      day: "Tomorrow",
      data: []
    },
    {
      day: "Future Lunches",
      data: []
    }
  ]

  eventSubscription: Subscription;
  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.eventSubscription = this.dataService.dataEmitter.subscribe((newData) => {

      // assign today
      this.lunchDays[0].data = newData.filter(lunch => {
        let today = new Date();

        return (lunch.time.getDate() == today.getDate())
          &&
          (lunch.time.getMonth() == today.getMonth())
          &&
          (lunch.time.getFullYear() == today.getFullYear())
          &&
          !(lunch.time < today)
      })
      this.lunchDays[0].data.sort((a,b) => {
        if(a.time < b.time){
          return -1;
        }
        if(a.time > b.time) {
          return 1;
        }
        return 0;
      })

      // assign tomorrow
      this.lunchDays[1].data = newData.filter(lunch => {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        return (lunch.time.getDate() == tomorrow.getDate())
          &&
          (lunch.time.getMonth() == tomorrow.getMonth())
          &&
          (lunch.time.getFullYear() == tomorrow.getFullYear())
      })
      this.lunchDays[1].data.sort((a,b) => {
        if(a.time < b.time){
          return -1;
        }
        if(a.time > b.time) {
          return 1;
        }
        return 0;
      })

      // assign later
      this.lunchDays[2].data = newData.filter(lunch => {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(23);
        tomorrow.setMinutes(59);
        tomorrow.setSeconds(59);

        return lunch.time > tomorrow;
      })
      this.lunchDays[2].data.sort((a,b) => {
        if(a.time < b.time){
          return -1;
        }
        if(a.time > b.time) {
          return 1;
        }
        return 0;
      })
    })
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.eventSubscription.unsubscribe();
  }
}