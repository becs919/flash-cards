class Guess {
  constructor ({response, card}) {
    this.response = response;
    this.card = card;
    this.correct = card.answer === response ? true : false;
  }

  feedback() {
    // let lowerGuess = guess.response.toLowerCase()
    // let lowerAnswer = guess.card.answer.toLowerCase()
    // if (lowerAnswer === lowerGuess) {

  //  return   this.correct ? 'Correct!' : 'Youre wrong!'
    if (this.correct) {
      // this.correct = true;
      return 'Correct!';
    } else {
      // this.correct = false;
      return 'Youre wrong!';
    }
     // return answer === userGuess ? 'correct' : 'wrong';
  }
}

export default Guess;
