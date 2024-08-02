// index.js

// Create variables for the first and second card
let firstCard = 6;
let secondCard = 9;
let cards = [firstCard, secondCard]; // array to hold the cards
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

// Store references to the HTML elements
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let startBtn = document.getElementById("start-btn");
let newCardBtn = document.getElementById("new-card-btn");

// Add event listeners to buttons
startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);

// Function to start the game
function startGame() {
    renderGame();
}

// Function to render the game
function renderGame() {
    cardsEl.textContent = "Cards: " + cards.join(" ");
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

// Function to draw a new card
function newCard() {
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}

// Function to get a random card
function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1;
}
