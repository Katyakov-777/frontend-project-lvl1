import readlineSync from 'readline-sync';

function getRandomInt() {
  const min = Math.ceil(1);
  const max = Math.floor(101);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomOperator() {
    let text = "";
    const operator = "+-*";
    text += operator.charAt(Math.floor(Math.random() * operator.length));
    return text;
  };

  function randomExpression() {
    const numberOne = getRandomInt();
    const numberTwo = getRandomInt();
    const oper = randomOperator();
    let riddle = [numberOne, oper, numberTwo];
    return riddle;
};

function calculate(value) {
    switch (value[1]) {
        case value: "+"
            
            return value[0] + value[2];
    
        case value: "-"
            
            return value[0] - value[2];

        case value: "*"
            
            return value[0] * value[2];
        default: 
            
            return "no result";
    }
};

const isAnswerCorrect = (value, answer) => {
    if (calculate(value) === Number.parseInt(answer)) {
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
    let value = randomExpression();
    console.log("Question: " + value[0],value[1],value[2]);
    const answer = readlineSync.question('Your answer: ');

    if (isAnswerCorrect(number, answer)) {
      console.log('Correct!');
    } else {
      console.log("'" + answer + "'" + " is is wrong answer ;(. Correct answer was " + "'" + calculate(value) + "'.");
      console.log("Let's try again, " + name + "!")
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export { question as default };
