#!/usr/bin/env node
import mainFraim from '../src/index.js';
import {
  askQuestion, generateRiddle, isAnswerCorrect, showError,
} from '../src/games/logic-brain-gcd.js';

mainFraim(askQuestion, generateRiddle, isAnswerCorrect, showError);
