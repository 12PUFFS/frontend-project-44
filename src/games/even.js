import readlineSync from 'readline-sync';
import getName from '../cli.js';
import { getRandomNumber } from '../index.js';


const playEvenGame = () => {
  
  const ROUNDS_COUNT = 3;
  
  // Инициализация
const userName = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Основной игровой цикл
let correctAnswers = 0;
while (correctAnswers < ROUNDS_COUNT) {
  // Генерация вопроса
  const number = getRandomNumber(0, 100)
  console.log(`Question: ${number}`);
  
  // Проверка ответа
  const userAnswer = readlineSync.question('Your answer: ').toLowerCase();
  const isEven = number % 2 === 0;
  const correctAnswer = isEven ? 'yes' : 'no';

  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    correctAnswers += 1;
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${userName}!`);
    process.exit(1); // Завершаем игру при ошибке
  }
}

// Поздравление при победе
console.log(`Congratulations, ${userName}!`);    
}

export default playEvenGame