import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-createbutton',
  templateUrl: './createbutton.component.html',
  styleUrls: ['./createbutton.component.css']
})
export class CreatebuttonComponent {

  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content);
  }

}
