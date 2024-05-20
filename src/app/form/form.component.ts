import {
  Component,
  WritableSignal,
  computed,
  inject,
  model,
  signal,
} from '@angular/core';
import { FizzBuzzService } from '../fizz-buzz.service';

@Component({
  selector: 'app-form',
  styleUrl: './form.component.css',
  template: `<form
    (ngSubmit)="stopFizzBuzz()"
    (keydown.enter)="$event.preventDefault()"
  >
    <fieldset>
      <legend>FizzBuzz</legend>
      <label for="stop">Stop:</label>
      <input
        name="stopInput"
        [(ngModel)]="stopInput"
        placeholder="Type 'stop' to activate the button"
        pattern="/^stop$/i"
        required
      />
      <button *ngIf="inputValueIsValid()" type="submit">STOP</button>
    </fieldset>
  </form> `,
})
export class FormComponent {
  stopInput: WritableSignal<string> = model<string>('');

  private fizzBuzzService = inject(FizzBuzzService);

  inputValueIsValid = computed(() => {
    return this.stopInput().toLowerCase() === 'stop';
  });

  stopFizzBuzz = () => {
    if (this.inputValueIsValid()) {
      this.fizzBuzzService.stopFizzBuzz();
    }
  };
}
