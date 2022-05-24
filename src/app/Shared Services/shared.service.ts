import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  s_display:any;
  r_display:any;
  s_email:any;
  r_useremail:any;




  constructor() { }

  sendMsg(element:any){
    this.s_display=element;
  }
  sendUserName(emal:any){
    this.s_email=emal
  }
  reciveMsg(){
    return this.r_display=this.s_display
  }
  recieveUserName(){
    return this.r_useremail=this.s_email
  }

}
