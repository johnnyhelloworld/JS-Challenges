'use strict';

// Données: 

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski','Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Exercice 1

// 1.
let players1 = game.players[0];
let players2 = game.players[1];

// 2.
let gk = players1[0];
let fieldPlayers = players1.slice(1);

// 3.
let allPlayers = players1.concat(players2);

// 4.
let players1Final = players1.concat('Thiago', 'Coutinho', 'Perisic');

// 5.
let team1 = game.odds.team1;
let draw = game.odds.x;
let team2 = game.odds.team2;

// 6. Pas compris la consigne :(
function printGoals(numberPlayers) {
  for (let i=0; i < numberPlayers; i++){
    let randomPlayer = (allPlayers[Math.floor(Math.random() * allPlayers.length)]);
    console.log(randomPlayer);
  }
}
printGoals(11);

// 7.
if (game.odds.team1 < game.odds.team2) {
  console.log(`L'équipe qui a le plus de chance de gagner est le ${game.team1}`);
  } else if ((game.odds.team1 > game.odds.team2)) {
  console.log(`L'équipe qui a le plus de chance de gagner est le ${game.team2}`);
  } else {
  console.log(`match nul`);
}

// Exercice 2

// 1.
for (let i = 0; i < game.scored.length; i++) {
  console.log(`But ${i+1} : ${game.scored[i]}`)
}

// 2.
let odds = Object.values(game.odds);
for (let i = 0; i < odds.length; i++) {
  let averageOdds = odds.reduce((previousValue, currentValue) => previousValue + currentValue) / odds.length;
  console.log(averageOdds);
}

// 3.
console.log(`Probabilité de victoire pour ${game.team1} : ${game.odds.team1}`);
console.log(`Probabilité d'égalité : ${game.odds.x}`);
console.log(`Probabilité de victoire pour ${game.team2} : ${game.odds.team2}`);

// 4.
const scorers = game.scored.reduce(function (a, b) {
  return a[b] ? ++a[b] : (a[b] = 1), a;
}, {});

console.log(scorers);

// Exercice 3

const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];

// 1. 
let getTypeEvents = (array, gameEventsIndex) => array.map(element => element[gameEventsIndex]);
let allEvents = getTypeEvents(gameEvents, 1);

let events = allEvents.filter((element, index, array) => {
  return array.indexOf(element) === index;
});

// 2.
gameEvents.splice(4,1);

// 3.
let occurenceEvent = 90 / gameEvents.length;
console.log(`Un événement est apparu en moyenne toutes les ${occurenceEvent} minutes`);

// 4.
for (let i = 0; i < gameEvents.length; i++) {
  if (gameEvents[i][0] < 45) {
    console.log(`[PREMIÈRE MOITIÉ] ${gameEvents[i]}`)
  } else {
    console.log(`[DEUXIÈME MOITIÉ] ${gameEvents[i]}`)
  }
}