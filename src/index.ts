import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Akroma');
const player2 = new Character('Phage');
const player3 = new Character('Kahmal');

// console.log(player1.lifePoints);
player1.levelUp();
// console.log(player1.lifePoints);
player1.levelUp();
// console.log(player1.lifePoints);
player1.levelUp();
// console.log(player1.lifePoints);
player1.levelUp();
// console.log(player1.lifePoints);

const monster1 = new Monster();
const monster2 = new Dragon();

// console.log(monster1.lifePoints);
// console.log(monster2.lifePoints);

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };