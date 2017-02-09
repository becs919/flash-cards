import { expect } from 'chai';
import { assert } from 'chai';
import Guess from '../scripts/guess'
import Card from '../scripts/cards'

describe('Guess', () => {

  it('Guess should be a function', () => {
    assert.isFunction(Guess);
  });


  it('should have a repsonse', () => {
    let card = new Card({
      question:"What is the capital of Alaska?", answer:"Juneau"
    })
    let guess = new Guess({
      response: 'Juneau',
      card: card
    });

    expect(guess.response).to.deep.equal('Juneau');
  });


  it('should have a corresponding card', () => {
    let card = new Card({
      question:"What is the capital of Alaska?",
      answer:"Juneau"
    });
    let guess = new Guess({
      response: "north north west",
      card: card
    });

    assert.equal(guess.card, card);
  });

  it('should have a function of feedback', () => {
    let card = new Card({
      question:"What is the capital of Alaska?",
      answer:"Juneau"
    });
    let guess = new Guess({
      response: "north north west",
      card: card
    });

    assert.isFunction(guess.feedback);
  });

  it('should have a property of correct when the response is correct', () => {
    let card2 = new Card({
      question: "Describe in words the exact direction that is 697.5° clockwise from due north?",
      answer: "North north west"
    });
    let guess = new Guess({
      response: "North north west",
      card: card2});

    guess.feedback(guess);
    assert.equal(guess.correct, true);
  });

  it('should have a property of correct is false when the response is false', () => {
    let card2 = new Card({
      question: "Describe in words the exact direction that is 697.5° clockwise from due north?",
      answer: "North north west"
    });
    let guess = new Guess({
      response: "North north east",
      card: card2});

    assert.equal(guess.correct, false);
  });

  // it('should not be case sensitive', () => {
  //   let card2 = new Card({question: "Describe in words the exact direction that is 697.5° clockwise from due north?", answer: "North north west"});
  //   let guess = new Guess({response: "north north west", card: card2});
  //   guess.feedback(guess);
  //   assert.equal(guess.correct, true);
  // });
});
