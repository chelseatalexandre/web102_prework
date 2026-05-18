import GAMES_DATA from './games.js';

const GAMES_JSON = JSON.parse(GAMES_DATA);

function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const gamesContainer = document.getElementById("games-container");

function addGamesToPage(games) {
    for (const game of games) {
        const gameCard = document.createElement("div");

        gameCard.classList.add("game-card");

        gameCard.innerHTML = `
            <img class="game-img" src="${game.img}" />
            <h3>${game.name}</h3>
            <p>${game.description}</p>
            <p>Pledged: $${game.pledged}</p>
        `;

        gamesContainer.appendChild(gameCard);
    }
}

addGamesToPage(GAMES_JSON);
