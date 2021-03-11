import { Component, OnInit } from '@angular/core';
import { RegistrationClass } from '../registration-class';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userModel = new RegistrationClass("","")

  constructor() { }

  ngOnInit(): void {
  }

}
