"use strict";

// param: none
// return: num
const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

// param: string, string
// return: string
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
};
// console.log(chooseOption("yulz", "ernie")); //for debugging

//param: num
//return: num
const attackPlayer = function (health) {
  return health - randomDamage();
};

//params: stinrg, num
//return: ???????? nothing?
const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

// params: str, str
// return: nothing
const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

//params: num
//return: boolean
const isDead = (health) => {
  return health <= 0 ? true : false;
};
// alternative:
// const isDead = (health) => health <= 0;

// params: str, str, num, num
// return: nothing?
function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    const attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health)) {
        logDeath(player1, player2);
        break;
      }
    } else {
      player1Health = attackPlayer(player1Health);
      logHealth(player1, player1Health);
      if (isDead(player1Health)) {
        logDeath(player2, player1);
        break;
      }
    }
  }
}

fight("Mitch", "Adam", 100, 100);
