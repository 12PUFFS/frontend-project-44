import readlineSync from 'readline-sync';
import sayHi from '../cli.js';
import { getName, checkAnswer } from '../index.js';

sayHi();
const userName = getName();
console.log('Find the greatest common divisor of given numbers.');

const calculateGcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
};

const gcd = () => {
  const ROUNDS_COUNT = 3;
  let correctAnswers = 0;

  while (correctAnswers < ROUNDS_COUNT) {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    const correctAnswer = calculateGcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = Number(readlineSync.question('Your answer: '));

    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return; // Завершаем игру при ошибке
    }
    correctAnswers++;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default gcd;
