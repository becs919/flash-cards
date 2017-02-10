import { expect } from 'chai';
import { assert } from 'chai';
import Card from '../scripts/cards';

describe('Card', () => {

  it('Card should be a function', () => {
    assert.isFunction(Card);
  });


  it('should have a question', () => {
    let card = new Card({
      question: 'What is the capital of Alaska?'
    });

    assert.equal(card.question, 'What is the capital of Alaska?');
  });


  it('should have an answer', () => {
    let card = new Card({
      question: 'What is the capital of Alaska?',
      answer: 'Juneau'
    });

    assert.equal(card.answer, 'Juneau');
  });

  it('should hold both question and answer', () => {
    let card = new Card({
      answer: 'Juneau',
      question: 'What is the capital of Alaska?'
    });

    assert.equal(card.answer, 'Juneau');
    assert.equal(card.question, 'What is the capital of Alaska?');
  });
});
