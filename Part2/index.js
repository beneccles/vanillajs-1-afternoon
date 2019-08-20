const idInput= document.getElementById("idInput");
const colorInput = document.getElementById("colorInput");

function setCard(){
    let card = document.getElementById(idInput.value);

    card.style.color = colorInput.value;
    console.log(card);
}

function resetCard(){
    let cards = document.getElementsByTagName("section");

    for (let i = 0; i < cards.length; i++){
        cards[i].style.color = 'grey';
    }
}