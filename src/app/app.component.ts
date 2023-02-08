import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'quizapp';

  showInstruction: boolean = false;
  showQuestions: boolean = false;
  constructor() { }
  ngOnInit(): void {

  }

  startBtn() {
    this.showInstruction = !this.showInstruction;
  }

  exitBtn() {
    this.showInstruction = !this.showInstruction;
  }

  continueBtn() {
    this.showInstruction = !this.showInstruction;
    this.showQuestions = !this.showQuestions;
  }
}
