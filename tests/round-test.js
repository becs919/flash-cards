import { expect } from 'chai';
import { assert } from 'chai';
import Guess from '../scripts/guess';
import Card from '../scripts/cards';
import Deck from '../scripts/deck';
import Round from '../scripts/round';


describe('rounds functionality', () => {

  it('should be a function', () => {
    assert.isFunction(Round);
  });

  it('should have a deck', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    });
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    });
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);

    assert(round.deck instanceof Deck, 'no deck');
  });

  it('should have guesses', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    });
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    });
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);

    assert.deepEqual(round.guesses, []);
  });

  it('should have a currentCard function', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    });
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    });
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);

    assert.isFunction(round.currentCard);
  });

  it('should tell you what your current card is', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    });
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    });
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);

    round.currentCard();
    assert.equal(round.currentCard(), card1);
  });

  it('should record and keep track of length', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    });
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    });
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);

    round.recordGuess('Juneau');
    assert.equal(round.guesses.length, 1);
  });

  it('should tell you if the response is correct', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    });
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    });
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);

    round.recordGuess('Juneau');
    assert.equal(round.guesses[0].feedback(), 'Correct!');
  });

  it('should tell you if the response is not correct', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    });
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    });
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);

    round.recordGuess('Anchorage');
    assert.equal(round.guesses[0].feedback(), 'Youre wrong!');
  });

  it('should keep track of correct answers', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    });
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    });
    let deck  = new Deck([card1, card2]);
    let round = new Round(deck);

    round.recordGuess('Juneau');
    assert.equal(round.numberCorrect, 1);
  });

  it('should tell you if the response is not correct', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    })
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    })
    let deck  = new Deck([card1, card2])
    let round = new Round(deck)

    round.recordGuess('Anchorage')
    assert.equal(round.numberCorrect, 0)
  });

  it('should remove card from deck after guessing and keep tracks of number correct', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    })
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    })
    let deck  = new Deck([card1, card2])
    let round = new Round(deck)

    assert.equal(round.numberCorrect, 0)
    assert.equal(deck.count(), 2)

    round.recordGuess('Juneau')

    assert.equal(round.numberCorrect, 1)
    assert.equal(deck.count(), 1)

    round.recordGuess('93,000,000')

    assert.equal(round.numberCorrect, 2)
    assert.equal(deck.count(), 0)
  });
  
  it('should keep track of percentage correct', () => {
    let card1 = new Card({
      question: "What is the capital of Alaska?",
      answer: "Juneau"
    })
    let card2 = new Card({
      question: "Approximately how many miles are in one astronomical unit?",
      answer: "93,000,000"
    })
    let deck  = new Deck([card1, card2])
    let round = new Round(deck)


    round.recordGuess('Juneau')
    assert.equal(round.numberCorrect, 1)
    round.recordGuess('95,000,000')
    assert.equal(round.numberCorrect, 1)
    assert.equal(round.percentCorrect(), 50)
  });
});
