import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SingletonService {
  private data = new BehaviorSubject({});
  getData = this.data.asObservable();
  setData(value: any): void {
    this.data.next(value);
  }
  constructor() { }
}
