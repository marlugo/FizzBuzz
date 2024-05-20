import { Component, computed, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FizzBuzzService } from '../fizz-buzz.service';

@Component({
  selector: 'app-reactive-form',
  template: `<form
    [formGroup]="stopForm"
    (ngSubmit)="stopFizzBuzz()"
    (keydown.enter)="$event.preventDefault()"
  >
    <fieldset>
    <legend>FizzBuzz</legend>
      <label for="stop">Stop:</label>
      <input
        formControlName="stopInput"
        placeholder="Type 'stop' to activate the button"
      />
      <button *ngIf="this.stopForm.get('stopInput')?.valid" type="submit">
        STOP
      </button>
    </fieldset>
  </form>`,
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  stopForm: FormGroup;

  constructor(
    private fizzBuzzService: FizzBuzzService,
    private fb: FormBuilder
  ) {
    this.stopForm = this.fb.group({
      stopInput: ['', [Validators.required, Validators.pattern(/^stop$/i)]],
    });
  }

  stopFizzBuzz = () => {
    this.fizzBuzzService.stopFizzBuzz();
  };
}
