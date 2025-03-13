import { questions } from './questions.js';

let cards = document.querySelectorAll(".gameCardSelection");
let viewCardContainer = document.querySelector(".viewCard");
let nameViewSelected = document.querySelector(".nameViewSelected");
let imgCard = document.querySelector(".imgCard");
let backButton = document.querySelector(".backButton");
let card = document.querySelector(".card");
let buttonViewCar = document.querySelector(".buttonViewCar");
let cardFront = document.querySelector(".cardFront");
let cardBack = document.querySelector(".cardBack");
let nameCardSelected = document.querySelector(".nameCardSelected");
let buttonViewCardContainer = document.querySelector(".buttonViewCardContainer");
let cardText = document.querySelector(".cardText");
let buttonRandomCategory = document.querySelector(".buttonRandomCategory");
let menuGameContainer = document.querySelector(".menuGameContainer");

let cardSelected;
const categ = ['perspectiva', 'profundidad', 'picantes', 'random'];

// acá guardamos las preguntas que ya salieron para que no se repitan
let preguntasUsadas = {
    perspectiva: [],
    profundidad: [],
    picantes: [],
    random: []
};

cards.forEach(card => {
    card.addEventListener("click", () => {
        cardSelected = card.dataset.category;
        SelectedCard(cardSelected);
    });
});

buttonRandomCategory.addEventListener("click", () => {
    let randomCat = elegirAleatorio(categ);
    SelectedCard(randomCat);
});

console.log(questions);

// función para elegir un elemento al azar de un array (básicamente un "metele que es tarde")
function elegirAleatorio(arreglo) {
    const randomIndex = Math.floor(Math.random() * arreglo.length);
    return arreglo[randomIndex];
}

// función para poner en mayúscula la primera letra, porque somos detallistas 😎
function capitalizeFirstLetter(str) {
    return str.length === 0 ? str : str.charAt(0).toUpperCase() + str.slice(1);
}

// función que se fija qué preguntas ya salieron y elige una que no esté repetida
function obtenerPreguntaAleatoria(cardName) {
    // filtramos las preguntas que todavía no salieron
    let preguntasDisponibles = questions[cardName].filter(p => !preguntasUsadas[cardName].includes(p));

    // si ya salieron todas, reseteamos la lista y que vuelva la joda
    if (preguntasDisponibles.length === 0) {
        preguntasUsadas[cardName] = [];
        preguntasDisponibles = [...questions[cardName]]; // clonamos el array original para no romper nada
    }

    // elegimos una pregunta al azar entre las que quedan
    let preguntaSeleccionada = elegirAleatorio(preguntasDisponibles);

    // guardamos la pregunta en la lista de usadas para que no se repita
    preguntasUsadas[cardName].push(preguntaSeleccionada);

    return preguntaSeleccionada;
}

// función principal que maneja la selección de una categoría
function SelectedCard(cardName) {
    menuGameContainer.classList.add("showMenu");

    // sacamos una pregunta random pero sin repetir (como corresponde)
    let pregunta = obtenerPreguntaAleatoria(cardName);

    nameViewSelected.innerText = capitalizeFirstLetter(cardName);
    imgCard.src = './assets/img/' + cardName + '.svg';
    cardFront.classList = ["viewCard"];
    cardFront.classList.add("back" + cardName);
    nameViewSelected.classList.add("degrade" + cardName);

    viewCardContainer.classList.add("showViewCard");
    cardText.innerText = pregunta;
    console.log(cardName);

    // evento para cerrar la vista de la pregunta
    backButton.addEventListener("click", () => {
        viewCardContainer.classList.remove("showViewCard");
        menuGameContainer.classList.remove("showMenu");
    });

    // evento para cuando se da vuelta la carta
    buttonViewCar.addEventListener("click", () => {
        card.classList.add('flipped');
        cardFront.classList.add('flippedFront');
        cardBack.classList.add('flippedBack');
        nameCardSelected.style.opacity = '0';
        buttonViewCardContainer.style.opacity = '0';

        backButton.addEventListener("click", () => {
            setTimeout(() => {
                card.classList.remove('flipped');
                cardFront.classList.remove('flippedFront');
                cardBack.classList.remove('flippedBack');
                nameCardSelected.style.opacity = '1';
                buttonViewCardContainer.style.opacity = '1';
            }, 250);
            setTimeout(() => {
                nameViewSelected.classList = [];
                cardFront.classList = ["viewCard"];
            }, 500);
        });
    });
}
