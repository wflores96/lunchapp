import { Injectable, EventEmitter } from '@angular/core';
import { events } from '../data/data';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseData = [];
  dataEmitter = new EventEmitter<any>();
  
  constructor() {
  }

  emitHook(newData: any) {
    this.baseData.push(newData);
    this.dataEmitter.emit(this.baseData);
  }
}
