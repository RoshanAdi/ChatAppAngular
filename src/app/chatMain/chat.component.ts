import {Component, OnInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../services/web-socket.service';
import { ChatMessageDto } from '../models/chatMessageDto';

@Component({
  selector: 'cf-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],

})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(public webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.chatWebSocket();
  }

  ngOnDestroy(): void {
    this.webSocketService.closeWebSocket();
  }
  receiver: any;
  receiverId:any
  username = localStorage.getItem("username")
  updateReceiver(newValue: any) {
    this.receiver = newValue;}
  updateReceiverId(newValue: any) {
    this.receiverId = newValue;}

logout(){
    location.reload()
}
}
