import { Component, OnInit, Input } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';
import { Time } from '@angular/common';

@Component({
  selector: 'app-createbutton',
  templateUrl: './createbutton.component.html',
  styleUrls: ['./createbutton.component.css']
})
export class CreatebuttonComponent implements OnInit {

  @Input()location: string;
  @Input()date: any;
  @Input()time: any;


  constructor(private modalService: NgbModal, private dataService: DataService) {
    this.date = new Date();
  }

  set humanDate(e) {
    e = e.split('-');
    let d = new Date(Date.UTC(e[0], e[1]-1, e[2]));
    this.date.setFullYear(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate());
  }

  get humanDate(){
    return this.date.toISOString().substring(0, 10);
  }

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content);
  }

  submitEvent() {
    var finalDate = new Date(this.date);
         
    var timeSplit = this.time.split(':');
    finalDate.setHours(timeSplit[0]);
    finalDate.setMinutes(timeSplit[1]);

    this.dataService.emitHook({
      location: this.location,
      time: finalDate,
      host: localStorage.getItem('name'),
      going: [localStorage.getItem('name')],
      maybe: []
    })
  }

  debug() {

    console.log(this.date);
    
  }

}
