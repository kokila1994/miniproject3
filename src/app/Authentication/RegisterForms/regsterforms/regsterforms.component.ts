import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Shared Services/shared.service';

@Component({
  selector: 'app-regsterforms',
  templateUrl: './regsterforms.component.html',
  styleUrls: ['./regsterforms.component.scss']
})
export class RegsterformsComponent implements OnInit {
  loginForm:any;
  listOfusers:any=[];

  constructor(private router:Router, private SharedService:SharedService){

  }

  ngOnInit(): void {
    this.SharedService.sendMsg(this.listOfusers);
    this.loginForm = new FormGroup({
      "firstname": new FormControl("",[Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z ]*$")]),
      "lastname": new FormControl("",[Validators.required,Validators.minLength(4),Validators.pattern("^[a-zA-Z ]*$")]),
      "email": new FormControl("",[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      "password": new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]),
      "repassword": new FormControl("",[Validators.required,Validators.minLength(8),Validators.pattern('(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}')]),
      "phonenumber": new FormControl("",[Validators.required,Validators.maxLength(12),Validators.pattern("[6-9]\\d{9}")]),
      "street": new FormControl("",[Validators.required]),
      "place":new FormControl("",[Validators.required]),
      "city":new FormControl("",[Validators.required]),
      "state":new FormControl("",[Validators.required]),
    })
  }
  get firstname(){
    return this.loginForm.get("firstname")
  }
  get lastname(){
    return this.loginForm.get("lastname")
  }
  get email(){
    return this.loginForm.get("email")
  }
  get password(){
    return this.loginForm.get("password")
  }
  get repassword(){
    return this.loginForm.get("repassword")
  }
  get phonenumber(){
    return this.loginForm.get("phonenumber")
  }
  get street(){
    return this.loginForm.get("street")
  }
  get place(){
    return this.loginForm.get("place")
  }
  get city(){
    return this.loginForm.get("city")
  }
  get state(){
    return this.loginForm.get("state")
  }
  submitForm(){
    if(this.loginForm.get("password").value == this.loginForm.get("repassword").value){
      console.log("password conform password are matched")
      localStorage.setItem("firstname",this.loginForm.value.firstname);
      localStorage.setItem("lastname",this.loginForm.value.lastname);
      localStorage.setItem("email",this.loginForm.value.email);
      localStorage.setItem("password",this.loginForm.value.password);
      localStorage.setItem("repassword",this.loginForm.value.repassword);
      localStorage.setItem("phonenumber",this.loginForm.value.phonenumber);
      localStorage.setItem("street",this.loginForm.value.street);
      localStorage.setItem("place",this.loginForm.value.place);
      localStorage.setItem("city",this.loginForm.value.city);
      localStorage.setItem("state",this.loginForm.value.state);
      this.listOfusers.push(this.loginForm.value);
      console.log(this.listOfusers);
      this.router.navigate(['./loginform'])
    }
  }
}
