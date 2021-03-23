import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  public user!: { userId: number; };

  constructor(private data: DataService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.data.get().subscribe(
      data=>{ 
              console.log(data)
              this.feedbacks = data
              console.log();
              this.feedbacks1 = this.feedbacks.filter((feedbacks: { userId: number; })=>feedbacks.userId==this.user.userId);
              console.log(this.feedbacks1);
              console.log(this.user.userId);
              
            })


      this.user={
        userId:this.activatedroute.snapshot.params['userId']
      }
     }
  }


