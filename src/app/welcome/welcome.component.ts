import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcomeMessage: String = "";
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  this.welcomeMessage = "Welcome to Quiz App";
  }
  goToRegistration() {
    console.log('Register button clicked ...!');
    this.router.navigate(["/registartion"]);
  }
}
