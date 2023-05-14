import {Component, EventEmitter, Output} from '@angular/core';
import {WebSocketService} from "../services/web-socket.service";

@Component({
  selector: 'app-private-chat-window',
  templateUrl: './private-chat-window.component.html',
  styleUrls: ['./private-chat-window.component.css']
})
export class PrivateChatWindowComponent {


  @Output() autoScroll3: EventEmitter<void> = new EventEmitter<void>();
  username = localStorage.getItem("username")
  public  nullReceiver:string = ""
  constructor(public webSocketService: WebSocketService) {
  }
  autoScrollMe(){


    this.autoScroll3.emit()

  }
}
