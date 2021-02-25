import getRandomInt from '../Utilities.js';
import { commonNumberRange, gcdConstants } from '../Defines.js';

// массив рандомных чисел
function randomNumber() {
  const numberOne = getRandomInt(commonNumberRange.MIN_NUMBER, commonNumberRange.MAX_NUMBER);
  const numberTwo = getRandomInt(commonNumberRange.MIN_NUMBER, commonNumberRange.MAX_NUMBER);
  const riddle = [numberOne, numberTwo];
  return riddle;
}

// наибольший общий делитель
function greatestСommonDivisor(value) {
  let firstNum = value[gcdConstants.FIRST_NUMBER];
  let secondNum = value[gcdConstants.SECOND_NUMBER];
  while (firstNum !== 0 && secondNum !== 0) {
    if (firstNum === secondNum) {
      return firstNum;
    } if (firstNum > secondNum) {
      firstNum %= secondNum;
    } else {
      secondNum %= firstNum;
    }
  }
  return firstNum + secondNum;
}

const isAnswerCorrect = (rightAnswer, userAnswer) => rightAnswer === Number.parseInt(userAnswer,
  10);

const showError = (rightAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
};
// return right answert
const generateRiddle = () => {
  const number = randomNumber();
  console.log(`Question: ${number[gcdConstants.FIRST_NUMBER]} ${number[gcdConstants.SECOND_NUMBER]}`);
  return greatestСommonDivisor(number);
};

const askQuestion = () => {
  console.log('Find the greatest common divisor of given numbers.');
};

export {
  askQuestion, generateRiddle, isAnswerCorrect, showError,
};
