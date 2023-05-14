import {Component, EventEmitter, Input, Output} from '@angular/core';
import {WebSocketService} from "../services/web-socket.service";

@Component({
  selector: 'app-online-user-list',
  templateUrl: './online-user-list.component.html',
  styleUrls: ['./online-user-list.component.css'],

})
export class OnlineUserListComponent {

  @Input() receiver: any;

  @Output() receiverUpdated = new EventEmitter<any>();
  @Input() receiverId: any;
  @Output() receiverIdUpdated = new EventEmitter<any>();

  constructor(public webSocketService: WebSocketService) {
  }
  selectRecipient(recipientId:any,newValue:any){
    console.warn(recipientId)

    this.receiver = newValue
    this.receiverUpdated.emit(this.receiver);
    this.receiverId = recipientId
    this.receiverIdUpdated.emit(this.receiverId);


  }


}
