import { TestBed } from '@angular/core/testing';

import { FizzBuzzService } from './fizz-buzz.service';

describe('FizzBuzzService', () => {
  let service: FizzBuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzBuzzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  const testCases = [
    { input: 9, expectedOutput: 'Fizz' },
    { input: 10, expectedOutput: 'Buzz' },
    { input: 15, expectedOutput: 'FizzBuzz' },
    { input: 7, expectedOutput: '7' },
  ];
  
  testCases.forEach(({ input, expectedOutput }) => {
    it(`should return "${expectedOutput}" when the input is ${input}`, () => {
      const result = service['checkFizzBuzz'](input);
      expect(result).toEqual(expectedOutput);
    });
  });
});

