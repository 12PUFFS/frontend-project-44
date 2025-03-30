import readlineSync from 'readline-sync';
import  sayHi  from '../cli.js';
import { getName } from '../index.js';


const calc = () => {
    sayHi();
    const userName = getName();
    console.log("What is the result of the expression?");

    const calculate = (a, b, operator) => {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            default: return NaN;
        }
    };

    const ROUNDS_COUNT = 3;

    for (let correctAnswers = 0; correctAnswers < ROUNDS_COUNT; correctAnswers++) {
        const a = Math.floor(Math.random() * 25) + 1;
        const b = Math.floor(Math.random() * 25) + 1;
        const operators = ['+', '-', '*'];
        const operator = operators[Math.floor(Math.random() * operators.length)];

        console.log(`Question: ${a} ${operator} ${b}`);
        const userAnswer = readlineSync.question('Your answer: ');
        const correctAnswer = calculate(a, b, operator);

        if (Number(userAnswer) !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return; // Теперь это валидный return внутри функции
        }
        console.log('Correct!');
    }

    console.log(`Congratulations, ${userName}!`);
};


export default calc

