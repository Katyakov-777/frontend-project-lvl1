import getRandomInt from '../Utilities.js';
import { commonNumberRange } from '../Defines.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const isAnswerCorrect = (rightAnswer, userAnswer) => rightAnswer === userAnswer;

const showError = (rightAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
};
// return right answert
const generateRiddle = () => {
  const number = getRandomInt(commonNumberRange.MIN_NUMBER, commonNumberRange.MAX_NUMBER);
  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
};

const askQuestion = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export {
  askQuestion, generateRiddle, isAnswerCorrect, showError,
};
