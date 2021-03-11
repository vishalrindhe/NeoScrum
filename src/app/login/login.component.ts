import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginClass } from '../login-class';
import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  userModel = new LoginClass("","")
  // topicHasError= true
  onSubmit(){
    this.router.navigate(["/dashboard"])
  }
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

//   btnClick(){
//     this.router.navigateByUrl('/dashboard');
//   }
}
