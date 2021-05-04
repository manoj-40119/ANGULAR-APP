import { CssSelector } from '@angular/compiler';
import { Component} from '@angular/core';

@Component({
  selector: 'server-app',
  templateUrl: './server.component.html',
  styleUrls:['./server.component.css']
})


export class ServerComponent{
     serverId=10;
     serverStatus = 'offline';

     getserverStatus(){
       return this.serverStatus;
     }
}
