import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {path:'',redirectTo:'start-quiz',pathMatch:"full"},
  {path:'start-quiz',component:QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StartQuizRoutingModule { }
