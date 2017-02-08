import Guess from '../scripts/guess'


class Round {
  constructor(deck, guesses){
    this.deck = deck;
    this.guesses = [];
    this.numberCorrect = 0;

  }

  currentCard(){
    return this.deck.cards[0]
  }

  recordGuess(userGuess){
    let guess = new Guess({response: userGuess, card: this.currentCard()});
    this.guesses.push(guess)
    if (this.guesses[0].feedback() === 'Correct!') {
      this.numberCorrect++

    } else {
      return this.guesses
    }
    return this.guesses
  }
}



export default Round
