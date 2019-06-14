import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataService } from 'src/app/services/data.service';


interface IData {
  id:string,
  location: string,
  time: Date,
  host: string,
  going: string[],
  maybe: string[],
  comments: any[]
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
  newComment: string;
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

  constructor(private modalService: NgbModal, private dataService: DataService) { }

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
    this.modalService.open(content).result.finally(() => {
      this.newComment = "";
    });
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

  clickDelete(context:any) {
    this.dataService.deleteEvent(this.data.id);
    context.close();
  }

  submitComment() {
    this.data.comments.push({
      name: this.me,
      content: this.newComment
    })
    this.newComment = "";
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

  get needsDateShown() {
    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate()+1);
    tomorrow.setHours(23);
    tomorrow.setMinutes(59);
    tomorrow.setSeconds(59);

    return this.data.time > tomorrow;
  }

  private _days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  private _months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

  get dayText() {
    return this._days[this.data.time.getDay()];
  }

  get monthText() {
    return this._months[this.data.time.getMonth()];
  }

  get day() {
    return this.data.time.getDate();
  }

  get year() {
    return this.data.time.getFullYear();
  }


}
