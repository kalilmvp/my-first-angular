import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "Not Created";
  serverName = 'Begin';
  allowReset = false;
  serverCreated = false;

  username = '';

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    console.log('teste');
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created. Name is " + this.serverName;
  }

  onUpdateServerName(event:any) {
    this.serverName = event.target.value;
    console.log(event);
    console.log(this.serverName)
  }

  onUpdateReset(event:any) {
    this.username = event.target.value;

    if (this.username)
      this.allowReset = true;
  }

  onResetUsername(){
    this.username = '';
    this.allowReset = false;
  }
}
