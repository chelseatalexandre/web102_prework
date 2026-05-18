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

    const contributionsCard = document.getElementById("num-contributions");
    const raisedCard = document.getElementById("total-raised");
    const gamesCard = document.getElementById("num-games");

    const contributions = GAMES_JSON.reduce((acc, game) => acc + game.backers, 0);
    const raised = GAMES_JSON.reduce((acc, game) => acc + game.pledged, 0);

    contributionsCard.innerHTML = contributions.toLocaleString("en-US");
    raisedCard.innerHTML = "$" + raised.toLocaleString("en-US");
    gamesCard.innerHTML = GAMES_JSON.length;

    const unfundedBtn = document.getElementById("unfunded-btn");
    const fundedBtn = document.getElementById("funded-btn");
    const allBtn = document.getElementById("all-btn");

    unfundedBtn.addEventListener("click", () => {
        const unfundedGames = GAMES_JSON.filter(game => game.pledged < game.goal);
        addGamesToPage(unfundedGames);
    });

    fundedBtn.addEventListener("click", () => {
        const fundedGames = GAMES_JSON.filter(game => game.pledged >= game.goal);
        addGamesToPage(fundedGames);
    });

    allBtn.addEventListener("click", () => {
        addGamesToPage(GAMES_JSON);
    });

    const firstGameContainer = document.getElementById("first-game");
    const secondGameContainer = document.getElementById("second-game");

    const sortedGames = [...GAMES_JSON].sort((a, b) => b.pledged - a.pledged);
    const [firstGame, secondGame] = sortedGames;

    firstGameContainer.innerHTML = `<p>${firstGame.name}</p>`;
    secondGameContainer.innerHTML = `<p>${secondGame.name}</p>`;

});
