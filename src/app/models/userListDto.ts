export class UserListDto{
  nickName:String
  userId:String

  constructor(nickName: String, userId: String) {
    this.nickName = nickName;
    this.userId = userId;
  }
}
