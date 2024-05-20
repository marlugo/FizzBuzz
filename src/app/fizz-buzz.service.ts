import { Injectable } from '@angular/core';
import {
  Observable,
  Subject,
  map,
  scan,
  skip,
  take,
  takeUntil,
  timer,
} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FizzBuzzService {
  private stop$ = new Subject<void>();

  constructor() {}

  generateFizzBuzz = (): Observable<string[]> => {
    return timer(0, 500).pipe(
      take(101),
      skip(1),
      takeUntil(this.stop$),
      map((i) => this.checkFizzBuzz(i)),
      scan((acc: string[], curr: string) => [...acc, curr], [])
    );
  };

  stopFizzBuzz = () => {
    this.stop$.next();
  };

  private checkFizzBuzz = (i: number): string => {
    if (i % 3 === 0 && i % 5 === 0) {
      return 'FizzBuzz';
    } else if (i % 3 === 0) {
      return 'Fizz';
    } else if (i % 5 === 0) {
      return 'Buzz';
    } else {
      return i.toString();
    }
  };
}
