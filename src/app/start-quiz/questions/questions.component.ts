import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = '0';
  public name: any = '';
  public questionCompleted: boolean = false;
  constructor(private question: QuestionService,private router : Router) { }

  ngOnInit(): void {
    this.name = localStorage.getItem('name');
    this.getAllQuestions();
    this.startCounter();

  }
  getAllQuestions() {
    this.question.getQuestionJson().subscribe(res => {
      console.log(res);
      this.questionList = res.questions;
    })
  }
  nextQuestion() {
    this.currentQuestion++;
    this.stopCounter();
    this.startCounter();
    this.getProgressBar();
  }
  answer(option: any, qesNo: Number) {
    if (qesNo == this.questionList.length-1) {
      this.questionCompleted = true;
    }
    if (option.correct) {
      this.points += 10;
      if (this.currentQuestion < this.questionList.length)
        this.currentQuestion++;
      this.correctAnswer++;
    } else {
      this.points -= 10;
      if (this.currentQuestion < this.questionList.length)
        this.currentQuestion++;
      this.inCorrectAnswer++;
    }
    this.stopCounter();
    this.startCounter();
    this.getProgressBar();

  }
  startCounter() {
    this.interval$ = interval(1000).subscribe(val => {
      this.counter--;
      if (this.counter == 0) {
        this.points -= 10;
        if (this.currentQuestion == this.questionList.length - 1) {
          this.stopCounter();
          this.questionCompleted = true;
        }
         
        if (this.currentQuestion < this.questionList.length-1) {
          this.currentQuestion++;
          this.inCorrectAnswer++;
        }

        this.counter = 60;
        this.getProgressBar();
      }

    })
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000)
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 60;
  }
  getProgressBar() {
    this.progress = ((this.currentQuestion / (this.questionList.length - 1)) * 100).toString();
    console.log(this.progress);
    return this.progress;
  }
  goToHome() {
    localStorage.setItem('name', '');
    this.router.navigate(["/welcome"]);
  }
}
