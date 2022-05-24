import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  submit_btn:any; 
  value:any;
  converted:any;
  selectedcurrency:any; 

  constructor() {  }

  ngOnInit(): void {
  }
  selectChange(event:any){
    this.selectedcurrency = event.target.value;
  }
  convertion(){
    if(this.selectedcurrency == "US_Dollars" ){
      this.converted = this.value * 77;
    }
    if(this.selectedcurrency == "Euro" ){
      this.converted = this.value * 81;
    }
    if(this.selectedcurrency == "British_Pound" ){
      this.converted = this.value * 96;
    }
    if(this.selectedcurrency == "British_Pound" ){
      this.converted = this.value * 54;
    }
    if(this.selectedcurrency == "Australian_Dollars" ){
      this.converted = this.value * 21;
    }
    if(this.selectedcurrency == "UAE_Dirham" ){
      this.converted = this.value * 49;
    }
    console.log(this.value);
  }
}


