const card = require('cards');
const guess = require('guess');


card1 = new Card ({question:"What is the capital of Alaska?", answer:"Juneau"});

card2 = new Card({question: "Describe in words the exact direction that is 697.5° clockwise from due north?", answer: "North north west"});

guess = new Guess({response: "north north west", card: card2});

guess.feedback(guess);
