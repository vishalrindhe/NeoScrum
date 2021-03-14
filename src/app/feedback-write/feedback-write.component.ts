import { Component, OnInit } from '@angular/core';
import feedbackDummy from '../../assets/data/feedbackDummy.json'


@Component({
  selector: 'app-feedback-write',
  templateUrl: './feedback-write.component.html',
  styleUrls: ['./feedback-write.component.scss']
})
export class FeedbackWriteComponent implements OnInit {

  public feedBackList:{name:string,feedback:string,updated:number}[]=feedbackDummy;


    // public inputMessage :any
    currentVal=""

    getVal(value:any){
      this.currentVal = value
    }

  constructor() { }

  ngOnInit(): void {
  }

}
