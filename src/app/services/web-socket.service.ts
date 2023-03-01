import { Injectable } from '@angular/core';
import { ChatMessageDto } from '../models/chatMessageDto';
import {LoginDto} from "../models/loginDto";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {UserListDto} from "../models/userListDto";



@Injectable({
  providedIn: 'root'
})
export class WebSocketService {


  webSocket = new WebSocket('ws://localhost:8080/chat');
  chatMessages: ChatMessageDto[] = [];

  public map = new Map();
public senderIdd:any

  constructor() {}

  public chatWebSocket(){

    this.webSocket.onopen = (event) => {
      console.log('Open: ', event);
      localStorage.clear()
    };

    this.webSocket.onmessage = (event) => {
      console.log(event.data)


      if(!JSON.parse(event.data).user){                       //online user list update. receiving a stringfied json. cleanup and adding to a map
        this.map.clear()
        let string1 = JSON.stringify(JSON.parse(event.data))

        let list: any[] = [];
    list= string1.split(",")
        for (let i of list){
let list2:any[]=[]
          list2= i.split(":")
          var counter=0
          let dto
          let p
for (let j of list2){
 var k = j.toString().replaceAll("{","").replaceAll("}","")
if(counter==0){p = k ;counter=counter+1}
else {this.map.set(JSON.parse(p),JSON.parse(k))}
         }
        }
      }
      else {
        const chatMessageDto = JSON.parse(event.data);  //group chat
        this.senderIdd = chatMessageDto.senderId
        this.chatMessages.push(chatMessageDto);

      }



        console.warn(event.data)


    };

    this.webSocket.onclose = (event) => {
      console.log('Close: ', event);
      location.reload()
      localStorage.clear()
    };
  }

  public sendMessage(chatMessageDto: ChatMessageDto){
    this.webSocket.send(JSON.stringify(chatMessageDto));
  }
  public closeWebSocket() {
    this.webSocket.close();
  }

  public sendLogins(loginDto:LoginDto){

    this.webSocket.send(JSON.stringify(new ChatMessageDto(loginDto.username," Joined","l4231rfd2384if9","")))
    localStorage.setItem("user",loginDto.username)

  }




}
