import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar, MatDialog } from '@angular/material';

@Component({
  selector: 'app-quiz-questions-form',
  templateUrl: './quiz-questions-form.component.html',
  styleUrls: ['./quiz-questions-form.component.css']
})
export class QuizQuestionsFormComponent implements OnInit {

  @Input() questions: FormArray;
  activeQuestionIndex = 0;
  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    console.log(this.questions);
    this.questions.push(this.createQuestion());
  }

  addQuestion(questions: FormArray) {
    questions.push(this.createQuestion());
    this.activeQuestionIndex = questions.length - 1;
  }

  addAnswer(answers: FormArray) {
    answers.push(this.createAnswer());
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