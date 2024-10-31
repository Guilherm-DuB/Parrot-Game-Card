let numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));

while(numCards < 4 || numCards > 14){
    numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
}

while(numCards >= 4 || numCards <= 14){
    if(numCards % 2 !== 0){
        numCards = parseInt(prompt("Com quantas cartas deseja jogar?"));
    }
    else{
        break;
    }
}

let cards = [
    "imagens-parrot/assets/bobrossparrot.gif",
    "imagens-parrot/assets/explodyparrot.gif",
    "imagens-parrot/assets/fiestaparrot.gif",
    "imagens-parrot/assets/metalparrot.gif",
    "imagens-parrot/assets/revertitparrot.gif", 
    "imagens-parrot/assets/tripletsparrot.gif",
    "imagens-parrot/assets/unicornparrot.gif"
]

 cards = cards.sort(() => Math.random() - 0.5);

const numPair = numCards / 2;
let cardsRepetead = [];

for(let i = 0; i < numPair; i++){
    cardsRepetead.push([cards[i]], [cards[i]]);
}

let shuffledCards = cardsRepetead.sort(() => Math.random() - 0.5);

const listCard = document.querySelector("ul");

function qtdCards() {
    for(let i = 0; i < numCards; i++){
        listCard.innerHTML += `<li>
                    <div class="card" data-card=${shuffledCards[i]} onclick="virar(this)">
                    <div class="face front-card">
                    <img src=${shuffledCards[i]}>
                    </div>
                    <div class="face back-card">
                        <img src="imagens-parrot/assets/back.png">
                    </div>
                    </div>
                        </li>`
    }
}
qtdCards();


let firstCard = "";
let secondCard = "";
let firstSrc = '';
let secondSrc = '';
let numPlays = 0;

function virar(element) {
    if(element.className.includes('turn-card')){
        return;
    }

    if(firstCard === '') {
        element.classList.add('turn-card');
        firstCard = element;
        firstSrc = element.dataset.card;
    }
    else if (secondCard === '') {
        element.classList.add('turn-card');
        secondCard = element;
        secondSrc = element.dataset.card;
        checkCards();
    }

    

}


function checkCards() {
    
    if (firstSrc === secondSrc){
        firstCard = '';
        secondCard = '';

        checkEndGame();
    }
    else {
        setTimeout(() => {
        firstCard.classList.remove('turn-card');
        secondCard.classList.remove('turn-card');

        firstCard = '';
        secondCard = '';
        }, 1000);
    }
    numPlays += 2;
}

function checkEndGame() {
    const turnCards = document.querySelectorAll('.turn-card');

    if(turnCards.length === numCards){
        setTimeout(() => {
        alert(`Parabéns, você ganhou com ${numPlays} jogadas!!!`);
        }, 500);
    }
}


