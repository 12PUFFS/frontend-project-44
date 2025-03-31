import readlineSync from "readline-sync";
import sayHi from "../cli.js";
import { getName } from "../index.js";
import { getRandomNumber } from "../index.js";
import { checkAnswer } from "../index.js";

sayHi();
const playEvenGame = () => {
  const userName = getName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const ROUNDS_COUNT = 3;

  for (let correctAnswers = 0; correctAnswers < ROUNDS_COUNT; ) {
    const number = getRandomNumber(1, 100);
    console.log(`Question: ${number}`);

    const userAnswer = readlineSync.question("Your answer: ").toLowerCase();
    const isEven = number % 2 === 0;
    const correctAnswer = isEven ? "yes" : "no";

    if (!checkAnswer(userAnswer, correctAnswer, userName)) {
      return; // Завершаем игру при ошибке
    }
    correctAnswers++;
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playEvenGame;
