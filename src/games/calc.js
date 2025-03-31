import readlineSync from 'readline-sync';
import sayHi from '../cli.js';
import  getName  from '../index.js';
import { checkAnswer } from '../index.js';

sayHi();
const userName = getName();
const calc = () => {
  console.log('What is the result of the expression?');

  const calculate = (a, b, operator) => {
    switch (operator) {
      case '+':
        return a + b;
      case '-':
        return a - b;
      case '*':
        return a * b;
      default:
        return NaN;
    }
  };

  const ROUNDS_COUNT = 3;
  for (let correctAnswers = 0; correctAnswers < ROUNDS_COUNT;) {
    const a = Math.floor(Math.random() * 25) + 1;
    const b = Math.floor(Math.random() * 25) + 1;
    const operators = ['+', '-', '*'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    console.log(`Question: ${a} ${operator} ${b}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculate(a, b, operator);

    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return; // Завершаем игру при ошибке
    }
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default calc;
