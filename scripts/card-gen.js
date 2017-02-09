import Card from '../scripts/cards'
let fs = require('fs');

// const filename = '../scripts/cards.txt'

class CardsGenerator{
  constructor(filename){
    this.filename = filename;
  }

  readFile(filename) {
    let words = fs.readFileSync('./scripts/cards.txt', 'utf8').trim().split('\n')

    let mapWords = words.map((lines)=> {
      return lines.split(',')
    })

    let objectWords = mapWords.reduce((a,b) => {
      let card = new Card({question: b[0], answer: b[1]})
      a.push(card)
      return a
    }, [])
    return objectWords
  };
};

export default CardsGenerator
