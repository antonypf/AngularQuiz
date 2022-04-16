import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  myForm!: FormGroup;
  constructor(
    private router: Router
  ) {
    this.myForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z]*$")]),
      lastName: new FormControl("", [Validators.required, Validators.minLength(2)]),
      number: new FormControl("", [Validators.required, Validators.maxLength(10), Validators.pattern('[- +()0-9]+')]),
      email: new FormControl("", Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))

    });

  }

  ngOnInit(): void {
  }
  startQuiz() {
    console.log(this.myForm);
    console.log(this.myForm.value)

    if (this.myForm.valid) {
      console.log("Success");
      localStorage.setItem('name',this.myForm.value.firstName + this.myForm.value.lastName)
      this.router.navigate(["/start-quiz"]);
    }
    else {
      alert("Error")
    }
  }
}
