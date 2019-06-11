import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-group',
  templateUrl: './event-group.component.html',
  styleUrls: ['./event-group.component.css']
})
export class EventGroupComponent implements OnInit {

  @Input() eventDay = '';
  constructor() { }

  ngOnInit() {
  }

}
