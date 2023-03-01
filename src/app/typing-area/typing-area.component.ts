import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ChatMessageDto} from "../models/chatMessageDto";
import {WebSocketService} from "../services/web-socket.service";


@Component({
  selector: 'app-typing-area',
  templateUrl: './typing-area.component.html',
  styleUrls: ['./typing-area.component.css']
})
export class TypingAreaComponent {

  public username:any
  @Input() receiver: any ;
  @Output() receiverUpdated = new EventEmitter<any>();
  @Input() receiverId: any ;
  @Output() receiverIdUpdated = new EventEmitter<any>();
  constructor(public webSocketService: WebSocketService) {


    this.username = localStorage.getItem("username")
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(this.username, sendForm.value.message,this.webSocketService.senderIdd,sendForm.value.receiverId);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset();

  }

  removeRecipient(){
    this.receiver="Public"
    this.receiverId=""
    this.receiverIdUpdated.emit("")
    this.receiverUpdated.emit(this.receiver);
  }



}
