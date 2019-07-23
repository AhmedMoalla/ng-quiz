import { Difficulty } from './../../models/quiz';
import { TitleService } from 'src/app/services/title.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  rootForm: FormGroup;
  difficulties = Object.keys(Difficulty);
  activeQuestionIndex = 0;
  constructor(
    private titleService: TitleService,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Create a new quiz');
    this.rootForm = this.fb.group({
      title: this.fb.control('', Validators.required),
      category: this.fb.control(''),
      description: this.fb.control('', Validators.required),
      difficulty: this.fb.control('', Validators.required),
      questions: this.fb.array([this.createQuestion()])
    })

    this.onSubmit();
  }

  createQuestion() {
    return this.fb.group({
      question: this.fb.control('', Validators.required),
      answers: this.fb.array([
        this.createAnswer(),
        this.createAnswer(),
      ])
    });
  }

  createAnswer() {
    return this.fb.group({
      answer: this.fb.control('', Validators.required),
      isCorrect: this.fb.control(false),
    });
  }

  addQuestion(questions: FormArray) {
    questions.push(this.createQuestion());
    this.activeQuestionIndex = questions.length - 1;
  }

  addAnswer(answers: FormArray) {
    answers.push(this.createAnswer());
  }

  onSubmit() {
    if (this.rootForm.valid) {
      console.log('SUBMIT', this.rootForm.value);
    } else {
      console.log('INVALID', this.rootForm);
    }
  }

}
