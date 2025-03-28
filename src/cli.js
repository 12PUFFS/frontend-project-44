import readlineSync from 'readline-sync';

const sayHi = () => {
  console.log("Welcome to the Brain Games!");
};

const getName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

// Экспортируем оба метода
export { sayHi, getName };