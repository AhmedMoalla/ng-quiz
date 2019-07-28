import { Difficulty } from './../../models/quiz';
import { TitleService } from 'src/app/services/title.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl, FormControl, ValidationErrors } from '@angular/forms';
import { MatSnackBar, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
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

  onRemoveQuestionClick(questions: FormArray, questionIndex: number) {
    if (questions.length === 1) {
      this.snackBar.open('Quizzes must have at least one question.', null, {
        duration: 2000
      });
      return;
    }
    this.dialog.open(RemoveDialog, { data: { label: 'question', index: questionIndex } })
      .afterClosed()
      .subscribe(doRemove => {
        if (doRemove) {
          questions.removeAt(questionIndex);
        }
      })
  }

  onRemoveAnswerClick(answers: FormArray, answerIndex: number) {
    if (answers.length === 2) {
      this.snackBar.open('Questions must have at least two answers.', null, {
        duration: 2000
      });
      return;
    }
    this.dialog.open(RemoveDialog, { data: { label: 'answer', index: answerIndex } })
      .afterClosed()
      .subscribe(doRemove => {
        if (doRemove) {
          answers.removeAt(answerIndex);
        }
      })
  }

}

@Component({
  selector: 'remove-dialog',
  template: `
    <h1 mat-dialog-title>{{ capitalLabel + ' ' + (data.index + 1) }}</h1>
    <div mat-dialog-content>
      <p>Are you sure you want to remove this {{ data.label }} ?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Don't remove</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial color="warn">Remove</button>
    </div>
  `
})
export class RemoveDialog {

  capitalLabel: string;
  constructor(
    public dialogRef: MatDialogRef<RemoveDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { label: string, index: number }) {
      this.capitalLabel = data.label.charAt(0).toUpperCase() + data.label.substr(1);
    }

}
