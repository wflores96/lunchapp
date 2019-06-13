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
}
