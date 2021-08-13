import { Component, OnInit } from '@angular/core';

import { LogsService } from 'src/app/services/logs.service';
import { Log } from 'src/app/models/log';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.scss']
})
export class LogFormComponent implements OnInit {

  id: string = '';
  text: string = '';
  date: any;

  isNew: boolean = true;

  constructor(private logService: LogsService) { }

  ngOnInit() {
    //subscribe to the selectedlog observable
    this.logService.selectedLog.subscribe(log => {
      if (log.id !== null) {
        this.isNew = false;
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    })
  }

  onSubmit() {
    if (this.isNew) {
      const newLog: Log = {
        id: this.generateId(),
        text: this.text,
        date: new Date()
      }
      //Add log
      this.logService.addLog(newLog)
    } else {
      const logUpdate = {
        id: this.id,
        text: this.text,
        date: new Date()
      }

      //update log
      this.logService.updateLog(logUpdate)
    }

    //clear state
    this.clearState();
  }

  clearState() {
    this.id = '';
    this.text = '';
    this.date = null;
    this.isNew = true;

    this.logService.clearState();
  }

  generateId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
