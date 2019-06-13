import { Injectable } from '@angular/core';
import {events} from '../data/data';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseData = [];
  dataEmitter = new BehaviorSubject<any[]>(events);
  
  constructor() {
  }

  emitEvent(newData: any) {
    this.baseData.push(newData);
    this.dataEmitter.next(this.baseData);
  }
}
