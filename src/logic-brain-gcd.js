import readlineSync from 'readline-sync';

const FIRST_NUMBER = 0;
const SECOND_NUMBER = 1;

//генератор рандомного числа
function getRandomInt() {
  const min = Math.ceil(1);
  const max = Math.floor(101);
  return Math.floor(Math.random() * (max - min)) + min;
}

//массив рандомных чисел
  function randomNumber() {
    const numberOne = getRandomInt();
    const numberTwo = getRandomInt();
    let riddle = [numberOne, numberTwo];
    return riddle;
};
//наибольший общий делитель
function greatestСommonDivisor(value) {
    let firstNum = value[FIRST_NUMBER];
    let secondNum = value[SECOND_NUMBER];
    while (firstNum !==0 && secondNum !== 0) {
        if (firstNum === secondNum) {
            return firstNum;
        } else if (firstNum > secondNum) {
            firstNum = firstNum % secondNum;
        } else {
            secondNum =  secondNum % firstNum; 
        }
    }
    return firstNum + secondNum;
};
//проверка правильности ответа
const isAnswerCorrect = (value, answer) => {
    if (greatestСommonDivisor(value) === Number.parseInt(answer)) {
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
    let value = randomNumber();
    console.log("Question: " + value[FIRST_NUMBER] + " " + value[SECOND_NUMBER]);
    const answer = readlineSync.question('Your answer: ');
//победа/поражение
    if (isAnswerCorrect(value, answer)) {
      console.log('Correct!');
    } else {
      console.log("'" + answer + "'" + " is is wrong answer ;(. Correct answer was " + "'" + greatestСommonDivisor(value) + "'.");
      console.log("Let's try again, " + name + "!")
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { question as default };
