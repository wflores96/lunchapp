import { Injectable } from '@angular/core';
import {events} from '../data/data';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseData = events;
  dataEmitter = new BehaviorSubject<any[]>(this.baseData);
  
  constructor() {
  }

  emitEvent(newData: any) {
    this.baseData.push(newData);
    this.dataEmitter.next(this.baseData);
  }

  deleteEvent(id:string) {
    var index = this.baseData.indexOf(this.baseData.find(e => {return e.id === id}));
    this.baseData.splice(index,1);
    this.dataEmitter.next(this.baseData);
  }
}
