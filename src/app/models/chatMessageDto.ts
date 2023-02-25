export class ChatMessageDto {
    user: string;
    message: string;
    senderId:string;
    recieverId:string;


  constructor(user: string, message: string, senderId: string, recieverId: string) {
    this.user = user;
    this.message = message;
    this.senderId = senderId;
    this.recieverId = recieverId;
  }
}
