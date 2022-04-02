const { expect } = require('@jest/globals');
const stringLength = require('./functions');
const reverseString = require('./reverseString');
const calculator = require('./calculator');
const calc = new calculator();
const capitalized = require('./capitalString');

describe('strings', () => {
  test('length of a string', () => {
    expect(stringLength('helloWorld')).toBe(10);
    expect(stringLength('Hello My name is Fernando')).toBe(
      'Error, string is too big'
    );
  });

  test('reverse a string', () => {
    expect(reverseString('Hello')).toBe('olleH');
  });
});

describe('calculator', () => {
  test('should sum 2 values', () => {
    expect(calc.sum(3, 2)).toBe(5);
    expect(calc.sum(10, 2)).toBe(12);
    expect(calc.sum(1522, 15774)).toBe(17296);
  });
  test('should substract 2 values', () => {
    expect(calc.subs(3, 2)).toBe(1);
    expect(calc.subs(6, 2)).toBe(4);
    expect(calc.subs(1550, 300)).toBe(1250);
  });
  test('should multiply 2 values', () => {
    expect(calc.multiply(3, 2)).toBe(6);
    expect(calc.multiply(10, 300)).toBe(3000);
    expect(calc.multiply(54646, 5448)).toBe(297711408);
  });
  test('should divide 2 values', () => {
    expect(calc.divide(4, 2)).toBe(2);
    expect(calc.divide(100, 2)).toBe(50);
    expect(calc.divide(500, 10)).toBe(50);
  });
});

describe('Capitalize a string', () => {
  test('should check if the first char is capitalized', () => {
    expect(capitalized('hello')).toBe(false);
  });
});
