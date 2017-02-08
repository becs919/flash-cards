import { expect } from 'chai';
import { assert } from 'chai';
import Guess from '../scripts/guess'
import Card from '../scripts/cards'
import Deck from '../scripts/deck'


describe('Deck', () => {

  it('Deck should be a function', () => {
    assert.isFunction(Deck);
  });

  it('should have a property of cards', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"})
    let card3 = new Card({question: "Describe in words the exact direction that is 697.5° clockwise from due north?", answer: "North north west"})

    let deck = new Deck([card1, card2, card3])

    assert.deepEqual(deck.cards, [card1, card2, card3])
  })

  it('should start out with an empty array', () => {
    let deck = new Deck([])
    assert.deepEqual(deck.cards, [])
  });

  it('should tell you the length of the array', () => {
    let card1 = new Card({question: "What is the capital of Alaska?", answer: "Juneau"})
    let card2 = new Card({question: "The Viking spacecraft sent back to Earth photographs and reports about the surface of which planet?", answer: "Mars"})
    let deck = new Deck([card1, card2])
    deck.count()
    assert.deepEqual(deck.count(), 2)
  })
});
