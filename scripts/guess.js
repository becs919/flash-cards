class Guess {
  constructor ({response, card}) {
    this.response = response;
    this.card = card;
  }

  feedback(guess) {
    let lowerGuess = guess.response.toLowerCase()
    let lowerAnswer = guess.card.answer.toLowerCase()

    if (lowerAnswer === lowerGuess) {
      this.correct = true;
      return 'Correct!'
    } else {
      this.correct = false;
      return 'Youre wrong!'
    }
     // return answer === userGuess ? 'correct' : 'wrong';
  }
}




export default Guess
