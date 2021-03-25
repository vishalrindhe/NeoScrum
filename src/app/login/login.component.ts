import { Component, OnInit } from '@angular/core';
import { RouterModule,Router } from '@angular/router';

import { LoginClass } from '../login-class';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[DataService]
})
export class LoginComponent implements OnInit {

  
  userModel = new LoginClass("","")
  // topicHasError= true
  onSubmit(){
    this.router.navigate(["/dashboard"])
  }
  constructor(public router:Router, private service: DataService) { }

  ngOnInit(): void {
  }

  msg!: string;

  check(uname: string, p : string)
  {
    var output = this.service.checkusernameandpassword(uname, p);
    if(output == true)
    {
      this.router.navigate(['/dashboard/1']);
    }
    else{
    this.msg ='Invalid username or password';
    alert(this.msg)
    console.log(this.msg);
    
    }
  }
//   btnClick(){
//     this.router.navigateByUrl('/dashboard');
//   }
}
