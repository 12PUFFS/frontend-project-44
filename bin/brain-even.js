#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getName from '../src/cli.js'; // Только для получения имени

// Настройки игры
const ROUNDS_COUNT = 3;

// Инициализация
console.log('Welcome to the Brain Games!');
const userName = getName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Основной игровой цикл
let correctAnswers = 0;
while (correctAnswers < ROUNDS_COUNT) {
  // Генерация вопроса
  const number = Math.floor(Math.random() * 100) + 1;
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