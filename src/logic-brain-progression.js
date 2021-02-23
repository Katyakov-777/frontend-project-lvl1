import readlineSync from 'readline-sync';

const FIRST_NUMBER_IN_SEQUENCE = 0;
const MAX_VALUE_FOR_SEQUENCE_STEP = 11;
const MIN_VALUE_FOR_SEQUENCE_STEP = 2;
const MAX_SEQUENCE_LENGTH = 11;
const MIN_SEQUENCE_LENGTH = 5;

// генератор рандомного числа
function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// рандомная прогрессия
function generateRidle() {
  const initialNumber = getRandomInt(101, 1);
  const arrayLength = getRandomInt(MAX_SEQUENCE_LENGTH, MIN_SEQUENCE_LENGTH);
  const step = getRandomInt(MAX_VALUE_FOR_SEQUENCE_STEP, MIN_VALUE_FOR_SEQUENCE_STEP);
  const progression = [initialNumber];
  for (let i = 1; i < arrayLength; i++) {
    const nextNumber = progression[i - 1] + step;
    progression.push(nextNumber);
  }
  return progression;
}

// проверка правильности ответа
const isAnswerCorrect = (hiddenNumber, answer) => {
  if (hiddenNumber === Number.parseInt(answer)) {
    return true;
  }
  return false;
};

const question = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const value = generateRidle();
    const hiddenPosition = getRandomInt(value.length, FIRST_NUMBER_IN_SEQUENCE);
    const hiddenNumber = value[hiddenPosition];
    value[hiddenPosition] = '..';
    console.log(`Question: ${value.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    // победа/поражение
    if (isAnswerCorrect(hiddenNumber, answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}'` + ' is is wrong answer ;(. Correct answer was ' + `'${hiddenNumber}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { question as default };
