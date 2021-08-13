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

  constructor(private logServices: LogsService) {
    this.logs = [{
      id: '',
      text: '',
      date: ''
    }
    ]
  }
  ngOnInit(): void {
    this.logServices.getLogs().subscribe(logs => {
      this.logs = logs;
    })
  }

  //get the log
  onSelect(log: Log) {
    this.logServices.setFormLog(log);
  }

  onDelete(log: Log) {
    if (confirm("Are you sure you want to delete the log ? ")) {
      this.logServices.deleteLog(log)
    }

  }
}
