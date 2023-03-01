import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {WebSocketService} from "../services/web-socket.service";
import {ChatMessageDto} from "../models/chatMessageDto";
import {LoginDto} from "../models/loginDto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @Output() hideLoginView: EventEmitter<void> = new EventEmitter<void>();
  public currentUser:String | undefined


  constructor(public webSocketService: WebSocketService) { }




  sendLogins(LoginData: NgForm) {
    const loginDto = new LoginDto(LoginData.value.username);
    this.currentUser = loginDto.username
    this.webSocketService.sendLogins(loginDto);
localStorage.setItem("username",loginDto.username)
    this.hideLoginView.emit()
    /*sendForm.controls.message.reset();*/
  }

  ngOnInit(): void {

  }




}
