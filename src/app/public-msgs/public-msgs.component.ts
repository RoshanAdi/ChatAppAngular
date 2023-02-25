import { Component } from '@angular/core';
import {WebSocketService} from "../services/web-socket.service";

@Component({
  selector: 'app-public-msgs',
  templateUrl: './public-msgs.component.html',
  styleUrls: ['./public-msgs.component.css']
})
export class PublicMsgsComponent {

  constructor(public webSocketService: WebSocketService) {
  }
}