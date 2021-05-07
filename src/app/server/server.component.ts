import { Component} from '@angular/core';
@Component({
  selector: 'server-app',
  templateUrl: './server.component.html',
  styles:[`
  .onLine{
    color:white;
  }
  
  `]
})


export class ServerComponent{
     serverId=10;
     serverStatus = 'offline';
     constructor(){
       this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
     }
     onColor(){
       return this.serverStatus === 'online' ? 'green' : 'red'  ;  }
     getserverStatus(){
       return this.serverStatus;
     }
}
