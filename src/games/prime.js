import readlineSync from 'readline-sync';
import  sayHi  from '../cli.js';
import { getName } from '../index.js';

sayHi()
const userName = getName()




const isPrime = (number) => {
    if (number < 2) return false;
    for (let i = 2, max = Math.sqrt(number); i <= max; i++) {
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
  
  export default playPrimeGame;