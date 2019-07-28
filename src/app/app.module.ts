import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TopNavbarComponent } from "./components/top-navbar/top-navbar.component";
import { MatToolbarModule, MatButtonModule, MatRippleModule, MatIconModule, MatMenuModule, MatCardModule, MatProgressBarModule, MatTooltipModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTabsModule, MatCheckboxModule, MatSnackBarModule, MatDialogModule } from "@angular/material";
import { QuizCardComponent } from './components/quiz-card/quiz-card.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuizQuestionsFormComponent, RemoveDialog } from './components/quiz-questions-form/quiz-questions-form.component';

@NgModule({
  declarations: [AppComponent, TopNavbarComponent, QuizCardComponent, QuizListComponent, QuizFormComponent, RemoveDialog, QuizQuestionsFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [RemoveDialog]
})
export class AppModule {}
