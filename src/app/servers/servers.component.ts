import { Component } from '@angular/core';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server is created!';
  serverName ='TestServer';
  userName = '';
  servers = ['TestServer','TestServer2']
  userIfCreated = false;
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   }
  onClickButton(){
    this.userIfCreated = true;
    this.servers.push(this.serverName);
  this.serverCreationStatus="Server is Created" + "  "+ this.serverName;
  }
  onClick(){
    if(this.userName!=" "){
      this.userName=" ";
    }

  }
  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
