import { Component } from '@angular/core';
import { MenuNavComponent } from '@components/menu-nav/menu-nav.component';
import { ChoiceQuestionComponent } from '@components/choice-question/choice-question.component';

@Component({
  selector: 'app-actividad',
  imports: [MenuNavComponent, ChoiceQuestionComponent],
  templateUrl: './actividad.component.html',
  styleUrl: './actividad.component.scss'
})
export class ActividadComponent {
  optionsQuestions: any = [
    {
      id: 1,
      option: "style"
    },
    {
      id: 2,
      option: "footer"
    },
    {
      id: 3,
      option: "body"
    },
    {
      id: 4,
      option: "button"
    },
  ]
  correctAnswer: number = 3;

  selected?: number;
  isCorrect?: boolean;

  onOptionSelected(option: number) {
    this.selected = option;
    this.isCorrect = option === this.correctAnswer;
  }
}
