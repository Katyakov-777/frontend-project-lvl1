import readlineSync from 'readline-sync';

function getRandomInt() {
  const min = Math.ceil(1);
  const max = Math.floor(101);
  return Math.floor(Math.random() * (max - min)) + min;
}

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const isAnswerCorrect = (rightAnswer, userAnswer) => {
  if (rightAnswer === userAnswer) {
    return true;
  }

  return false;
};

const showError = (rightAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
};
// return right answert
const generateRiddle = () => {
  const number = getRandomInt();
  console.log(`Question: ${number}`);
  return isEven(number) ? 'yes' : 'no';
};

const askQuestion = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

export {
  askQuestion, generateRiddle, isAnswerCorrect, showError,
};
