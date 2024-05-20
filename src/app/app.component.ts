import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FizzBuzzService } from './fizz-buzz.service';

@Component({
  selector: 'app-root',
  styleUrl: './app.component.css',
  template: `<main class="main">
    <div class="content">
      <h1>FizzBuzz</h1>
      <!-- <app-form></app-form> -->
      <app-reactive-form> </app-reactive-form>
      <ul *ngIf="$fizzBuzz | async as fizzBuzzArray">
        <li
          *ngFor="let item of fizzBuzzArray; let i = index"
          [ngClass]="{ 'gray-bg': i % 2 !== 0 }"
        >
          <span>{{ item }}</span>
        </li>
      </ul>
    </div>
  </main>`,
})
export class AppComponent {
  title = 'FizzBuzz';
  $fizzBuzz: Observable<string[]>;

  constructor(private fizzBuzzService: FizzBuzzService) {
    this.$fizzBuzz = this.fizzBuzzService.generateFizzBuzz();
  }
}
