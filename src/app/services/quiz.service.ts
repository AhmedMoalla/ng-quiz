import { Difficulty } from './../models/quiz';
import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      id: 'angular',
      title: 'Angular',
      iconUrl: 'https://angular.io/assets/images/logos/angular/angular.png',
      category: 'SPA Framework',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
      questions: [],
      difficulty: Difficulty.Easy
    },,,,,,,,,
  ];
  constructor() { 
    this.quizzes = this.quizzes.fill(this.quizzes[0], 1);
  }

  getQuizzes(): Observable<Quiz[]> {
    return of(this.quizzes);
  }
}
