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

const isAnswerCorrect = (number, answer) => {
  if (isEven(number) && answer === 'yes') {
    return true;
  }
  if (!isEven(number) && answer === 'no') {
    return true;
  }
  return false;
};

const question = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (isAnswerCorrect(number, answer)) {
      console.log('Correct!');
    } else {
      if (answer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      } else if (answer === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      }
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { question as default };
