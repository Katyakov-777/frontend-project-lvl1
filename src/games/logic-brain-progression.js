import getRandomInt from '../Utilities.js';
import { commonNumberRange, progressionConstants } from '../Defines.js';

// рандомная прогрессия
function getProgression() {
  const initialNumber = getRandomInt(commonNumberRange.MAX_NUMBER, commonNumberRange.MIN_NUMBER);
  const arrayLength = getRandomInt(progressionConstants.MAX_PROGRESSION_LENGTH,
    progressionConstants.MIN_PROGRESSION_LENGTH);
  const step = getRandomInt(progressionConstants.MAX_PROGRESSION_STEP,
    progressionConstants.MIN_PROGRESSION_STEP);
  const progression = [initialNumber];
  for (let i = 1; i < arrayLength; i += 1) {
    const nextNumber = progression[i - 1] + step;
    progression.push(nextNumber);
  }
  return progression;
}

const isAnswerCorrect = (rightAnswer, userAnswer) => rightAnswer === Number.parseInt(userAnswer,
  10);

const showError = (rightAnswer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
};
// return right answert
const generateRiddle = () => {
  const progression = getProgression();
  const hiddenPosition = getRandomInt(progression.length,
    progressionConstants.FIRST_NUMBER_IN_PROGRESSION);
  const hiddenNumber = progression[hiddenPosition];
  progression[hiddenPosition] = '..';
  console.log(`Question: ${progression.join(' ')}`);
  return hiddenNumber;
};

const askQuestion = () => {
  console.log('What number is missing in the progression?');
};

export {
  askQuestion, generateRiddle, isAnswerCorrect, showError,
};
