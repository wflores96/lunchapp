import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-createbutton',
  templateUrl: './createbutton.component.html',
  styleUrls: ['./createbutton.component.css']
})
export class CreatebuttonComponent {

  closeResult: string;

  constructor(private modalService: NgbModal, private dataService: DataService) {}

  open(content) {
    this.modalService.open(content);
  }

}
