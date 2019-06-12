import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  @Input() data:any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    console.log(this.data);
  }

  showModal(content, event:any) {
    let classList = event.target.classList;
    if(classList.contains('btn') || classList.contains('badge')) {
      return;
    }
    this.modalService.open(content);
  }

}
