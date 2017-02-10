import Card from './cards';
let fs = require('fs');

class CardsGenerator{
  constructor(filename){
    this.filename = filename;
  }

  readFile(filename) {
    let words = fs.readFileSync(filename, 'utf8').trim().split('\n');

    let mapWords = words.map((lines)=> {
      let pair = lines.split(',');
      return new Card({question: pair[0], answer: pair[1]})
    });

    return mapWords;
  }
}

export default CardsGenerator
