import readlineSync from 'readline-sync';

const FIRST_NUMBER = 0;
const OPERATOR = 1;
const SECOND_NUMBER = 2;

function getRandomInt() {
  const min = Math.ceil(1);
  const max = Math.floor(101);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomOperator() {
  let text = '';
  const operator = '+-*';
  text += operator.charAt(Math.floor(Math.random() * operator.length));
  return text;
}

function randomExpression() {
  const numberOne = getRandomInt();
  const numberTwo = getRandomInt();
  const oper = randomOperator();
  const riddle = [numberOne, oper, numberTwo];
  console.log(`Question: ${numberOne}`, oper, numberTwo);
  return calculate(riddle);
}

function calculate(value) {
  switch (value[OPERATOR]) {
    case '+':

      return value[FIRST_NUMBER] + value[SECOND_NUMBER];

    case '-':

      return value[FIRST_NUMBER] - value[SECOND_NUMBER];

    case '*':

      return value[FIRST_NUMBER] * value[SECOND_NUMBER];
    default:

      return 'no result';
  }
}

const isAnswerCorrect = (rightAnswer, userAnswer) => {
  if (rightAnswer === Number.parseInt(userAnswer, 10)) {
    return true;
  }
  return false;
};

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
