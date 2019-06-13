import { Component, OnInit, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


interface IData {
  location: string,
  time: Date,
  host: string,
  going: [string],
  maybe: [string]
}
@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() data: IData;
  userGoing = false;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    var me = localStorage.getItem('name');
    if(this.data.going.indexOf(me) != -1 || this.data.maybe.indexOf(me) != -1) {
      this.userGoing = true;  
    }
  }

  showModal(content, event: any) {
    let classList = event.target.classList;
    if (classList.contains('btn') || classList.contains('badge')) {
      return;
    }
    this.modalService.open(content);
  }

  clickMaybe() {
    this.userGoing = true;
    this.data.maybe.push(localStorage.getItem('name'));
  }

  clickGoing() {
    this.userGoing = true;
    this.data.going.push(localStorage.getItem('name'));
  }

  clickUndo() {
    var me = localStorage.getItem('name');

    this.userGoing = false;
    var index = this.data.going.indexOf(me);
    if(index != -1) {
      this.data.going.splice(index, 1);
    }

    index = this.data.maybe.indexOf(me);
    if(index != -1) {
      this.data.maybe.splice(index, 1);
    }
  }

}
