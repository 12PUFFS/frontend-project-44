import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => 
    Math.floor(Math.random() * (max - min + 1)) + min;

export const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getQuestion = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  return number
}