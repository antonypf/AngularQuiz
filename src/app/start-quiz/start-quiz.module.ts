import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StartQuizRoutingModule } from './start-quiz-routing.module';
import { QuestionsComponent } from './questions/questions.component';


@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    StartQuizRoutingModule
  ]
})
export class StartQuizModule { }
