import readlineSync from 'readline-sync';
import  sayHi  from '../cli.js';
import { getName } from '../index.js';

sayHi()
const userName = getName()


const generateProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(start + i * step);
    }
    return progression;
  };
  
  const playProgressionGame = () => {
    const ROUNDS_COUNT = 3;
    let correctAnswers = 0;
  
    while (correctAnswers < ROUNDS_COUNT) {
      const start = Math.floor(Math.random() * 50) + 1;
      const step = Math.floor(Math.random() * 10) + 1;
      const length = Math.floor(Math.random() * 6) + 5; // 5-10 numbers
      const progression = generateProgression(start, step, length);
  
      const hiddenIndex = Math.floor(Math.random() * (length - 2)) + 1; // Not first or last
      const correctAnswer = progression[hiddenIndex];
      progression[hiddenIndex] = '..';
      const question = progression.join(' ');
  
      console.log(`Question: ${question}`);
      const userAnswer = Number(readlineSync.question('Your answer: '));
  
      if (userAnswer === correctAnswer) {
        console.log('Correct!');
        correctAnswers += 1;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
  
    console.log(`Congratulations, ${userName}!`);
  };

  export default playProgressionGame
  