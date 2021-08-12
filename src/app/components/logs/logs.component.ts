import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})

export class LogsComponent implements OnInit {

  logs: {
    id: string,
    text: string,
    date: any
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.logs = [{ id: '1', text: 'Generated Components', date: new Date('12/26/2017 12:54:23') }, { id: '2', text: 'Added Bootstrap', date: new Date('8/20/2019 09:30:17') },
    { id: '3', text: 'Added logs component', date: new Date('12/26/2017 6:30:19') }
    ]
  }

}
