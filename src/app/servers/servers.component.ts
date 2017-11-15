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
  servers = ['Test Server', 'Teste Server 2'];
  showIt = false;
  hiddenArray = [];
  count = 0;

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
    this.servers.push(this.serverName);
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

  toggleP(){
    //console.log('teste');
    this.showIt = !this.showIt;
    //this.hiddenArray.push(this.count++);
    this.hiddenArray.push(new Date());
    //console.log(this.hiddenArray);
  }
}
