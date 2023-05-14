import {
  Component,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ViewChild,
  OnChanges,
  SimpleChanges, Input, ElementRef
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WebSocketService } from '../services/web-socket.service';
import { ChatMessageDto } from '../models/chatMessageDto';
import {CdkVirtualScrollViewport} from "@angular/cdk/scrolling";

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
  receiverr: any; //intermediate parameter for name
  receiverIdd:any  //intermediate parameter for id
  username = localStorage.getItem("username")

  updateReceiver(newValue: any) {
    this.receiverr = newValue;}
  updateReceiverId(newValue: any) {
    this.receiverIdd = newValue;

  }

logout(){
    location.reload()

}
  @ViewChild(CdkVirtualScrollViewport) viewPort: any;
  @ViewChild(CdkVirtualScrollViewport) viewPort3: any;


  autoScroll(){
    this.viewPort.scrollToIndex(9999, "smooth");
  }
  autoScroll3(){

    this.viewPort3.scrollToIndex(999, "smooth");
  }


}
