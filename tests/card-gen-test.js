import { expect } from 'chai';
import { assert } from 'chai';
import CardsGenerator from '../scripts/card-gen'
import Card from '../scripts/cards'


describe('CardGenerator', () => {
  it('should have a textfile', () => {
    assert.isFunction(CardsGenerator)
  });

  it('should take a filename', () => {
    const filename = '../scripts/cards.txt'
    let cardsGenerator = new CardsGenerator(filename)
    assert.equal(cardsGenerator.filename, '../scripts/cards.txt')
  });

  it('should know how many cards there are', () => {
    const filename = '../scripts/cards.txt'
    let cardsGenerator = new CardsGenerator(filename)
    let cards = cardsGenerator.readFile(filename)
    assert.equal(cards.length, 4)
  });

});
