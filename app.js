// Card Options

let cardArray = [
    {
        name: "Apple",
        img: "assets/Apple.png"
    },
    {
        name: "Apple",
        img: "assets/Apple.png"
    },
    {
        name: "Banana",
        img: "assets/Banana.png"
    },
    {
        name: "Banana",
        img: "assets/Banana.png"
    },
    {
        name: "Carrot",
        img: "assets/Carrot.png"
    },
    {
        name: "Carrot",
        img: "assets/Carrot.png"
    },
    {
        name: "Hamburger",
        img: "assets/Hamburger.png"
    },
    {
        name: "Hamburger",
        img: "assets/Hamburger.png"
    },
    {
        name: "Lemon",
        img: "assets/Lemon.png"
    },
    {
        name: "Lemon",
        img: "assets/Lemon.png"
    },
    {
        name: "Strawberry",
        img: "assets/Strawberry.png"
    },
    {
        name: "Strawberry",
        img: "assets/Strawberry.png"
    }
];

cardArray.sort(() => 0.5 - Math.random());

let resultDisplay = document.getElementById('result');
let grid = document.getElementById('grid');
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

// Create Board

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        var card = document.createElement('img');
        card.setAttribute('src', 'assets/Blank.png');
        card.setAttribute('data-id', i);
        // Flip your card
        card.addEventListener('click', function() {
            var cardId = this.getAttribute('data-id');
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute('src', cardArray[cardId].img);
            // Check for match
            var cards = document.querySelectorAll('img');
            var optionOneId = cardsChosenId[0];
            var optionTwoId = cardsChosenId[1];
            if (cardsChosen.length === 2) {
                setTimeout(function() {
                    if (cardsChosen[0] === cardsChosen[1]) {
                        alert('You found a match!');
                        cards[optionOneId].setAttribute('src', 'assets/White.png');
                        cards[optionTwoId].setAttribute('src', 'assets/White.png');
                        cardsWon.push(cardsChosen);
                    } else {
                        cards[optionOneId].setAttribute('src', 'assets/Blank.png');
                        cards[optionTwoId].setAttribute('src', 'assets/Blank.png');
                        alert('Sorry, try again!');
                    }
                    cardsChosen = [];
                    cardsChosenId = [];
                    resultDisplay.textContent = cardsWon.length;

                    if (resultDisplay.textContent == cardArray.length / 2) {
                        resultDisplay.textContent = 'Congratulations, you found them all!';
                        grid.remove(cards);
                    }

                }, 500);
            }
        });
        grid.appendChild(card);
    }
}

createBoard();