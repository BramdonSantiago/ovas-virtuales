import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-choice-question',
  imports: [],
  templateUrl: './choice-question.component.html',
  styleUrl: './choice-question.component.scss'
})
export class ChoiceQuestionComponent {
  @Input() question!: any;

  @Output() selectedOption = new EventEmitter<number>();

  choose() {
    this.selectedOption.emit(this.question.id);
  }
}
