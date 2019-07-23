import { QuizService } from './../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/models/quiz';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes$: Observable<Quiz[]>;
  constructor(
    private quizService: QuizService,
    private titleService: TitleService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('All Quizzes');
    this.quizzes$ = this.quizService.getQuizzes();
  }

}
