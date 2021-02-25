import getRandomInt from '../Utilities.js';
import { primeConstants } from '../Defines.js';

// простое ли число
const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const isAnswerCorrect = (rightAnswer, userAnswer) => rightAnswer === userAnswer;

const showError = (rightAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
};

// return right answert
const generateRiddle = () => {
  const num = getRandomInt(primeConstants.MAX_NUMBER, primeConstants.MIN_NUMBER);
  console.log(`Question: Question: ${num}`);
  return isPrimeNumber(num) ? 'yes' : 'no';
};

const askQuestion = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
};

export {
  askQuestion, generateRiddle, isAnswerCorrect, showError,
};
