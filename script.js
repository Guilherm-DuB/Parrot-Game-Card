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

const listCard = document.querySelector("ul");

function qtdCards() {
    for(let i = 0; i < numCards; i++){
        listCard.innerHTML += `<li>
                        <div class="back-card" onclick="virar(this)">
                            <img src="imagens-parrot/assets/back.png">
                        </div>
                        <div class="front-card"></div>
                </li>`
    }
}

qtdCards();

function virar(element) {
    element.classList.toggle("front-card")
}

