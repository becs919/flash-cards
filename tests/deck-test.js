import { expect } from 'chai';
import { assert } from 'chai';
import Guess from '../scripts/guess'
import Card from '../scripts/cards'
import Deck from '../scripts/deck'


describe('Deck', () => {

  it('Deck should be a function', () => {
    assert.isFunction(Deck);
  });

  it('should start out with an empty array', () => {
    let deck = new Deck()
    assert.deepEqual(deck.cards, [])
  });
});
