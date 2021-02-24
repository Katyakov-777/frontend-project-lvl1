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
  return riddle;
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

const isAnswerCorrect = (value, answer) => {
  if (calculate(value) === Number.parseInt(answer, 10)) {
    return true;
  }
  return false;
};

const question = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const value = randomExpression();
    console.log(`Question: ${value[FIRST_NUMBER]}`, value[OPERATOR], value[SECOND_NUMBER]);
    const answer = readlineSync.question('Your answer: ');

    if (isAnswerCorrect(value, answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer} is is wrong answer ;(. Correct answer was ${calculate(value)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { question as default };
