import readlineSync from 'readline-sync';

// генератор рандомного числа
function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// простое ли число
const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// проверка правильности ответа
const isAnswerCorrect = (num, answer) => {
  if (isPrimeNumber(num) && answer === 'yes') {
    return true;
  } if (!isPrimeNumber(num) && answer === 'no') {
    return true;
  }
  return false;
};

const question = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = getRandomInt(16, 2);
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    // победа/поражение
    if (isAnswerCorrect(num, answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer} is wrong answer'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { question as default };
