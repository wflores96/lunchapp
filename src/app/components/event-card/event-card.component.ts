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
  going = false;
  maybe = false;
  private me = localStorage.getItem('name')

  get getHost() {
    if(this.data.host == this.me) {
      return 'You';
    }
    else {
      return this.data.host;
    }
  }

  get areHosting() {
    return this.getHost == 'You';
  }

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    if(this.data.going.indexOf(this.me) != -1) {
      this.clickGoing();
    }
    else if(this.data.maybe.indexOf(this.me) != -1) {
      this.clickMaybe();
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
    this.maybe = !this.maybe;
    this.going = false;

    if(this.maybe) {
      this.addToMaybe();
    } else {
      this.removeFromMaybe();
    }
    this.removeFromGoing();
  }

  clickGoing() {
    this.going = !this.going;
    this.maybe = false;

    if(this.going) {
      this.addToGoing();
    }
    else {
      this.removeFromGoing();
    }
    this.removeFromMaybe();
  }

  private removeFromMaybe() {
    var index = this.data.maybe.indexOf(this.me);
    if(index != -1) {
      this.data.maybe.splice(index, 1);
    }
  }

  private removeFromGoing() {
    var index = this.data.going.indexOf(this.me);
    if(index != -1) {
      this.data.going.splice(index, 1);
    }
  }

  private addToMaybe() {
    var index = this.data.maybe.indexOf(this.me);
    if(index == -1) {
      this.data.maybe.push(this.me);
    }
  }

  private addToGoing() {
    var index = this.data.going.indexOf(this.me);
    if(index == -1) {
      this.data.going.push(this.me);
    }
  }

}
