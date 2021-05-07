import { Component} from '@angular/core';
@Component({
  selector: 'server-app',
  templateUrl: './server.component.html',
  styleUrls:['./server.component.css']
})


export class ServerComponent{
     serverId=10;
     serverStatus = 'offline';
     constructor(){
       this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
     }

     getserverStatus(){
       return this.serverStatus;
     }
}
