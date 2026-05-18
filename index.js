import GAMES_DATA from './games.js';

const GAMES_JSON = JSON.parse(GAMES_DATA);

document.addEventListener("DOMContentLoaded", () => {
    const gamesContainer = document.getElementById("games-container");

    function addGamesToPage(games) {
        gamesContainer.innerHTML = "";

        for (const game of games) {
            const gameCard = document.createElement("div");
            gameCard.classList.add("game-card");

            gameCard.innerHTML = `
                <h3>${game.name}</h3>
                <p>${game.description}</p>
                <p>Pledged: $${game.pledged}</p>
            `;

            gamesContainer.appendChild(gameCard);
        }
    }

    addGamesToPage(GAMES_JSON);
});
