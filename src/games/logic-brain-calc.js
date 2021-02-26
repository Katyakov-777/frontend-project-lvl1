import getRandomInt from '../Utilities.js';
import { commonNumberRange, сalcConstants } from '../Defines.js';

function randomOperator() {
  let text = '';
  const operator = '+-*';
  text += operator.charAt(Math.floor(Math.random() * operator.length));
  return text;
}

function calculate(value) {
  switch (value[сalcConstants.OPERATOR]) {
    case '+':

      return value[сalcConstants.FIRST_NUMBER] + value[сalcConstants.SECOND_NUMBER];

    case '-':

      return value[сalcConstants.FIRST_NUMBER] - value[сalcConstants.SECOND_NUMBER];

    case '*':

      return value[сalcConstants.FIRST_NUMBER] * value[сalcConstants.SECOND_NUMBER];
    default:

      return 'no result';
  }
}
//random generation of Numbers
function randomExpression() {
  const numberOne = getRandomInt(commonNumberRange.MIN_NUMBER, commonNumberRange.MAX_NUMBER);
  const numberTwo = getRandomInt(commonNumberRange.MIN_NUMBER, commonNumberRange.MAX_NUMBER);
  const oper = randomOperator();
  const riddle = [numberOne, oper, numberTwo];
  console.log(`Question: ${numberOne} ${oper} ${numberTwo}`);
  return calculate(riddle);
}

const isAnswerCorrect = (rightAnswer, userAnswer) => rightAnswer === Number.parseInt(userAnswer,
  10);

const showError = (rightAnswer, userAnswer) => {
  console.log(`${userAnswer} is is wrong answer ;(. Correct answer was ${rightAnswer}.`);
};
// return right answert
const generateRiddle = () => randomExpression();

const askQuestion = () => {
  console.log('What is the result of the expression?');
};
export {
  askQuestion, generateRiddle, isAnswerCorrect, showError,
};
