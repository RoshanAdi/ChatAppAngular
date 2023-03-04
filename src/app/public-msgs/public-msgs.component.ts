import {Component, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {WebSocketService} from "../services/web-socket.service";
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

@Component({
  selector: 'app-public-msgs',
  templateUrl: './public-msgs.component.html',
  styleUrls: ['./public-msgs.component.css']
})
export class PublicMsgsComponent {

  @Output() autoScroll: EventEmitter<void> = new EventEmitter<void>();
  username = localStorage.getItem("username")
  public  nullReceiver:string = ""
  constructor(public webSocketService: WebSocketService) {
  }
hi(){

  this.autoScroll.emit()
}
}
