import Guess from '../scripts/guess'

class Round {
  constructor(deck, guesses){
    this.deck = deck;
    this.guesses = [];
    this.numberCorrect = 0;
  };

  currentCard(){
    return this.deck.cards[0]
  };

  recordGuess(userGuess){
    let guess = new Guess({
      response: userGuess,
      card: this.currentCard()
    });

    this.guesses.unshift(guess)
    if (this.guesses[0].feedback() === 'Correct!') {
      this.numberCorrect++;
    }

    this.deck.cards.shift()
    return this.guesses
  };

  percentCorrect(){
    let percentage = (this.numberCorrect/this.guesses.length)*100
    return percentage
  };
};

export default Round
