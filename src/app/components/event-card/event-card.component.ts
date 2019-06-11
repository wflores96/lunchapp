import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  showModal(content, event:any) {
    let classList = event.target.classList;
    if(classList.contains('btn') || classList.contains('badge')) {
      return;
    }
    this.modalService.open(content);
  }

}
