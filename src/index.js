import readlineSync from 'readline-sync';

const gameEngine = (rules, runGame) => {
  const ROUNDS = 3;

  const showRules = () => {
    console.log(rules);
  };

  const generateRound = () => {
    const { question, realAnswer } = runGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isCorrect = (realAnswer.toString() === userAnswer.toString());
    return {
      question, isCorrect, realAnswer, userAnswer,
    };
  };

  // greeting
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  // show rules
  showRules();

  // run game
  for (let i = 1; i <= ROUNDS; i += 1) {
    const { isCorrect, realAnswer, userAnswer } = generateRound();
    if (isCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default gameEngine;
