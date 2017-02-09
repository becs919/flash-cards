import { expect } from 'chai';
import { assert } from 'chai';
import CardsGenerator from '../scripts/card-gen'

let filename = 'cards.txt'


describe('CardGenerator', () => {
  // const filename = '../scripts/cards.txt'
  let cardsGenerator = new CardsGenerator(filename)

  it('should have a textfile', () => {
    assert.isFunction(CardsGenerator)
  });

  it('should have a readFile function', () => {

    assert.isFunction(cardsGenerator.readFile)
  })

  it('should take a filename', () => {

    assert.equal(cardsGenerator.filename, 'cards.txt')
  });

  it('should know how many cards there are', () => {
    let cards = cardsGenerator.readFile(filename)

    assert.equal(cards.length, 4)
  });

});
