import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-createbutton',
  templateUrl: './createbutton.component.html',
  styleUrls: ['./createbutton.component.css']
})
export class CreatebuttonComponent implements OnInit {

  @Input() location: string;
  @Input() date: any;
  @Input() time: any;


  constructor(private modalService: NgbModal, private dataService: DataService) {
  }

  ngOnInit() {
    this.date = new Date();
  }

  set humanDate(e) {
    if (!e) {
      return;
    }
    e = e.split('-');
    let d = new Date(Date.UTC(e[0], e[1] - 1, e[2]));
    this.date.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  }

  get humanDate() {
    return this.date.toISOString().substring(0, 10);
  }

  open(content) {
    this.modalService.open(content);
  }

  submitEvent(context: any) {
    if (!this.location || !this.time) {
      alert("Please enter a location and/or time.");
      return;
    }

    var finalDate = new Date(this.date);

    var timeSplit = this.time.split(':');
    finalDate.setHours(timeSplit[0]);
    finalDate.setMinutes(timeSplit[1]);

    this.dataService.emitEvent({
      id: UUID.UUID(),
      location: this.location,
      time: finalDate,
      host: localStorage.getItem('name'),
      going: [localStorage.getItem('name')],
      maybe: []
    })
    context.close();
  }

  get dateBeginLimit() {
    let limit = new Date();
    let _limit = `${limit.getFullYear()}-${limit.getMonth() < 9 ? '0':''}${limit.getMonth()+1}-${limit.getDate()}`;
    return _limit;
  }

  get dateEndLimit() {
    let limit = new Date();
    limit.setDate(limit.getDate()+4);
    limit.setHours(23);
    limit.setMinutes(59);
    limit.setSeconds(59);
    let _limit = `${limit.getFullYear()}-${limit.getMonth() < 9 ? '0':''}${limit.getMonth()+1}-${limit.getDate()}`;
    return _limit;
  }

  debug() {

    console.log(this.humanDate);
    console.log(this.time);
    console.log(typeof (this.time));

  }

}
