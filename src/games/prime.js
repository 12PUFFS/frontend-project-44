import readlineSync from 'readline-sync';
import sayHi from '../cli.js';
import { getName, checkAnswer } from '../index.js';

sayHi();
const userName = getName();

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

const playPrimeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const roundsCount = 3;
  let correctAnswers = 0;
  while (correctAnswers < roundsCount) {
    const number = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim();

    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return; // Завершаем игру при ошибке
    }
    correctAnswers += 1;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playPrimeGame;
