var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function() {
  var board = document.getElementById('game-board');
  for (var i = 0; i < cards.length; i++) {
    var newCard = document.createElement('div')
    newCard.className = 'card';
    newCard.setAttribute('data-card', cards[i]);
    newCard.addEventListener('click', isTwoCards);
    board.appendChild(newCard);
  }
}

var isMatch = function(cards) {
  if (cards[0] === cards[1]) {
    alert ("You found a match!")
  } else {
    alert ("Sorry, try again.")
  }
  var allCards = document.getElementsByClassName('card')
  for (var i = 0; i < allCards.length; i++) {
    var card = allCards[i]
    card.innerHTML = ''
  }
}

var isTwoCards = function() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if(this.getAttribute('data-card') === 'king') {
    this.innerHTML = '<img src="king.png" alt="King of Spades" />';
  } else {
      this.innerHTML = '<img src="queen.png" alt="Queen of Hearts" />';
  }
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

createBoard()

/*var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


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
*/
