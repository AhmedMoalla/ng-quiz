import { QuizFormComponent } from './components/quiz-form/quiz-form.component';
import { QuizListComponent } from "./components/quiz-list/quiz-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "quizzes", component: QuizListComponent, pathMatch: "full" },
  { path: "create-quiz", component: QuizFormComponent, pathMatch: "full" },
  { path: "**", redirectTo: "quizzes", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
