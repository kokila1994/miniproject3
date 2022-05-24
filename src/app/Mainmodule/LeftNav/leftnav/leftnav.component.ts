import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Shared Services/shared.service';

@Component({
  selector: 'app-leftnav',
  templateUrl: './leftnav.component.html',
  styleUrls: ['./leftnav.component.scss']
})
export class LeftnavComponent implements OnInit {
  receivedmsg:any
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.receivedmsg= this.shared.reciveMsg()
  }

}
