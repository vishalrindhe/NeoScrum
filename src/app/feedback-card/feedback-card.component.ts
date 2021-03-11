import { Component, OnInit } from '@angular/core';
import feedbackDummy from '../../assets/data/feedbackDummy.json'

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss']
})
export class FeedbackCardComponent implements OnInit {
  public feedBackList:{name:string,feedback:string,updated:number}[]=feedbackDummy;
  constructor() { }

  ngOnInit(): void {
  }

}
