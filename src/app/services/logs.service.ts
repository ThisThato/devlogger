import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Log } from '../models/log';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  logs: Log[];

  private logSource = new BehaviorSubject<Log>({ id: '', text: '', date: null })
  selectedLog = this.logSource.asObservable();

  //clear state
  private stateSource = new BehaviorSubject<Boolean>(true);
  stateClear = this.stateSource.asObservable();


  constructor() {
    // this.logs = [{ id: '1', text: 'Generated Components', date: new Date('12/26/2017 12:54:23') }, { id: '2', text: 'Added Bootstrap', date: new Date('8/20/2019 09:30:17') },
    // { id: '3', text: 'Added logs component', date: new Date('12/26/2017 6:30:19') }
    // ]

    this.logs = [];
  }


  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log)
  }

  addLog(newLog: Log) {
    this.logs.unshift(newLog)
  }

  updateLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        //remove the log
        this.logs.splice(index, 1)
      }
    })

    this.logs.unshift(log)
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        //remove the log
        this.logs.splice(index, 1)
      }
    })
  }

  //clear state
  clearState() {
    this.stateSource.next(true)
  }


}
