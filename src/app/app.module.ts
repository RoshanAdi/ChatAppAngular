import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { AppComponent } from './app.component';
import {ChatComponent} from "./chatMain/chat.component";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { PublicMsgsComponent } from './public-msgs/public-msgs.component';
import { OnlineUserListComponent } from './online-user-list/online-user-list.component';
import { TypingAreaComponent } from './typing-area/typing-area.component';
import {ContentLimitterPipe} from "./Pipe/content-limitter.pipe";


@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        LoginComponent,
        PublicMsgsComponent,
        OnlineUserListComponent,
        TypingAreaComponent,
        ContentLimitterPipe,

    ],
  imports: [
    BrowserModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
