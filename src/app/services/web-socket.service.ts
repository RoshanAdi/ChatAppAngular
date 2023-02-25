import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/chatMessageDto';
import {LoginDto} from "../models/loginDto";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
private userId :String = "blank"

  webSocket = new WebSocket('ws://localhost:8080/chat');
  chatMessages: ChatMessageDto[] = [];

  constructor() {localStorage.setItem("fw","fw") }

  public chatWebSocket(){

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);

    };

    this.webSocket.onmessage = (event) => {
      const chatMessageDto = JSON.parse(event.data);
      if (chatMessageDto.username){                          //checks for first time default joined msg
        this.chatMessages.push({recieverId: "", senderId: "", user:chatMessageDto.username,message:" Joined!"})
      }
      if (JSON.parse(event.data).Id){                                    //checks for first time forwarded userId
        this.setUserKey(JSON.parse(event.data).message)
      }
      else {this.chatMessages.push(chatMessageDto);}         //usual chat msgs
alert((event.data))

    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
      location.reload()
    };
  }

  public sendMessage(chatMessageDto: ChatMessageDto){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }
  public closeWebSocket() {
    this.webSocket.close();
  }

  public sendLogins(loginDto:LoginDto){

    this.webSocket.send(JSON.stringify(new ChatMessageDto(loginDto.username," Joined","blank","blank")))
    localStorage.setItem("user",loginDto.username)

  }
public setUserKey(key:string){
    localStorage.setItem("userId",key)
  sessionStorage.setItem("userId",key)
  console.warn(localStorage.getItem("userId"))
}



}
