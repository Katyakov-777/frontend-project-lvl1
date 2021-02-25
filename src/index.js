import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const mainFraim = (askQuestion, generateRiddle, isAnswerCorrect, showError) => {
  const userName = greeting();
  askQuestion();
  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = generateRiddle();
    const userAnswer = readlineSync.question('Your answer: ');
    if (isAnswerCorrect(rightAnswer, userAnswer)) {
      console.log('Correct!');
    } else {
      showError(rightAnswer, userAnswer);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export { mainFraim as default };
