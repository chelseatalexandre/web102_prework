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

    const unfundedBtn = document.getElementById("unfunded-btn");
    const fundedBtn = document.getElementById("funded-btn");
    const allBtn = document.getElementById("all-btn");

    unfundedBtn.addEventListener("click", () => {

        const unfundedGames = GAMES_JSON.filter(game => {
            return game.pledged < game.goal;
        });

        addGamesToPage(unfundedGames);
    });

    fundedBtn.addEventListener("click", () => {

        const fundedGames = GAMES_JSON.filter(game => {
            return game.pledged >= game.goal;
        });

        addGamesToPage(fundedGames);
    });

    allBtn.addEventListener("click", () => {
        addGamesToPage(GAMES_JSON);
    });

});
