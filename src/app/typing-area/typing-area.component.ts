import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ChatMessageDto} from "../models/chatMessageDto";
import {WebSocketService} from "../services/web-socket.service";
import {delay} from "rxjs";


@Component({
  selector: 'app-typing-area',
  templateUrl: './typing-area.component.html',
  styleUrls: ['./typing-area.component.css']
})
export class TypingAreaComponent implements AfterViewInit{

  public username:any
  @Input() receiver: any = "Public" ;
  @Output() receiverUpdated = new EventEmitter<any>(); //for removing previous username when pressed public chat button.
  @Input() receiverId: any  ;
  @Output() receiverIdUpdated = new EventEmitter<any>(); //for removing previous user id when pressed public chat button.
  constructor(public webSocketService: WebSocketService) {


    this.username = localStorage.getItem("username")
  }
  @ViewChild('myButton') myButton : any
  ngAfterViewInit(): void {
    let el: HTMLElement = this.myButton.nativeElement as HTMLElement;
    setTimeout(()=> el.click());
    }


  sendMessage(sendForm: NgForm) {
    const chatMessageDto = new ChatMessageDto(this.username, sendForm.value.message,this.webSocketService.senderIdd,sendForm.value.recieverId);
    this.webSocketService.sendMessage(chatMessageDto);
    sendForm.controls['message'].reset();
  }
 removeRecipient(){
    this.receiver="Public"
    this.receiverId=""
    this.receiverIdUpdated.emit("")
    this.receiverUpdated.emit(this.receiver);
  }
  @ViewChild('mySubmitButton') mySubmitButton : any
  sendButtonClick(sendForm: NgForm){
    if(sendForm.value.message){   let el: HTMLElement = this.mySubmitButton.nativeElement as HTMLElement;
      setTimeout(()=> el.click());
    }

  }

  onKeydown(event:any){
    event.preventDefault();
  }


}
