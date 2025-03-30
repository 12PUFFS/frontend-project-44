import readlineSync from 'readline-sync';


import sayHi from '../cli.js';
import { getName } from '../index.js';
import { getRandomNumber } from '../index.js';

sayHi()
const playEvenGame = () => {
  
  const ROUNDS_COUNT = 3;

  const userName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let correctAnswers = 0; correctAnswers < ROUNDS_COUNT;) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);
    
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;