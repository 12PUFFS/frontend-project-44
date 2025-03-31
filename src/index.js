import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getQuestion = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  return number;
};

export const checkAnswer = (userAnswer, correctAnswer, userName) => {
  // Нормализация ответов: преобразуем в строку и удаляем лишние пробелы
  const normalizedUser = String(userAnswer).trim();
  const normalizedCorrect = String(correctAnswer).trim();

  const isCorrect = normalizedUser === normalizedCorrect;

  if (isCorrect) {
    console.log('Correct!');
    return true;
  }

  console.log(`'${normalizedUser}' is wrong answer ;(. Correct answer was '${normalizedCorrect}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};
