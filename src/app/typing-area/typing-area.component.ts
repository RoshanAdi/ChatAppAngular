import {Component, Input} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ChatMessageDto} from "../models/chatMessageDto";
import {WebSocketService} from "../services/web-socket.service";
import {LoginComponent} from "../login/login.component";

@Component({
  selector: 'app-typing-area',
  templateUrl: './typing-area.component.html',
  styleUrls: ['./typing-area.component.css']
})
export class TypingAreaComponent {
private userId:any
  public username:any
public currentUser:String | undefined
  constructor(public webSocketService: WebSocketService) {

this.userId = localStorage.getItem("userId")
    this.username = localStorage.getItem("username")
  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(this.username, sendForm.value.message,this.userId,"");
    this.webSocketService.sendMessage(chatMessageDto);

    /*sendForm.controls.message.reset();*/

  }
}
