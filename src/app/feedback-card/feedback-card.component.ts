import { Component, OnInit } from '@angular/core';
import feedbackDummy from '../../assets/data/feedbackDummy.json'
import { DataService } from '../data.service';

@Component({
  selector: 'app-feedback-card',
  templateUrl: './feedback-card.component.html',
  styleUrls: ['./feedback-card.component.scss']
})
export class FeedbackCardComponent implements OnInit {
  public feedBackList:{name:string,feedback:string,updated:number}[]=feedbackDummy;
  feedbacks1: any;
  feedbacks: any;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.get().subscribe(
      data=>{ 
              console.log(data)
              this.feedbacks = data
              console.log();
              this.feedbacks1 = this.feedbacks.filter((feedbacks: { userId: number; })=>feedbacks.userId==1);
              console.log(this.feedbacks1);
            })

      
     }
     
  
  }


