import { Difficulty } from './../../models/quiz';
import { TitleService } from 'src/app/services/title.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz-form',
  templateUrl: './quiz-form.component.html',
  styleUrls: ['./quiz-form.component.css']
})
export class QuizFormComponent implements OnInit {

  rootForm: FormGroup;
  difficulties = Object.keys(Difficulty);

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
      questions: this.fb.array([])
    })

    this.onSubmit();
  }

  onSubmit() {
    if (this.rootForm.valid) {
      console.log('SUBMIT', this.rootForm.value);
    } else {
      console.log('INVALID', this.rootForm);
    }
  }

}