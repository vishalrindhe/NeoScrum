import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackWriteComponent } from './feedback-write.component';

describe('FeedbackWriteComponent', () => {
  let component: FeedbackWriteComponent;
  let fixture: ComponentFixture<FeedbackWriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackWriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
