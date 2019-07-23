import { Component, OnInit, Input } from '@angular/core';
import { Quiz } from 'src/app/models/quiz';

@Component({
  selector: 'app-quiz-card',
  templateUrl: './quiz-card.component.html',
  styleUrls: ['./quiz-card.component.css']
})
export class QuizCardComponent implements OnInit {

  @Input() quiz: Quiz;
  constructor() { }

  ngOnInit() {
  }

}
