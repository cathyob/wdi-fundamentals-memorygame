var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*
if (cardOne === cardTwo) {
  alert ("You found a match!")
} else {
  alert ("Sorry, try again.")
}
if (cardThree === cardFour) {
  alert ("You found a match!")
} else {
  alert ("Sorry, try again.")
}
if (cardTwo === cardFour) {
  alert ("You found a match!")
} else {
  alert ("Sorry, try again.")
}
*/

var numberOfCards = 4 //so can be updated easily

var createCards = function() {
  var board = document.getElementById('game-board');

  for (var i = 0; i < numberOfCards; i++) {
    var newCard = document.createElement('div')
    newCard.className = 'card'

    board.appendChild(newCard)
  }
}

createCards()
