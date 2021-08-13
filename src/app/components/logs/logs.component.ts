import { Component, OnInit } from '@angular/core';
import { Log } from 'src/app/models/log';
import { LogsService } from 'src/app/services/logs.service';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})

export class LogsComponent implements OnInit {

  logs: Log[];
  selectedLog: Log = {
    id: '',
    text: '',
    date: ''
  };
  loaded: boolean = false;

  constructor(private logServices: LogsService) {
    this.logs = [this.selectedLog]
  }
  ngOnInit(): void {

    this.logServices.stateClear.subscribe(clear => {
      if (clear) {
        this.selectedLog = {
          id: '',
          text: '',
          date: ''
        }
      }
    })

    //fetch logs
    this.logServices.getLogs().subscribe(logs => {
      this.logs = logs;
      this.loaded = true;
    })


  }

  //get the log
  onSelect(log: Log) {
    this.logServices.setFormLog(log);
    this.selectedLog = log;
  }

  onDelete(log: Log) {
    if (confirm("Are you sure you want to delete the log ? ")) {
      this.logServices.deleteLog(log)
    }

  }
}
