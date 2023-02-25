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

public currentUser:String | undefined
  constructor(public webSocketService: WebSocketService) {


  }

  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(sendForm.value.user, sendForm.value.message,"","");
    this.webSocketService.sendMessage(chatMessageDto);

    /*sendForm.controls.message.reset();*/

  }
}
