import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _character: SimpleFighter;
  private _monster: SimpleFighter[];

  constructor(character: Fighter, monster: SimpleFighter[]) {
    super(character);
    this._character = character;
    this._monster = monster;
  }

  fight(): number {
    const monsters = [...this._monster]; // copia dos monstros para manter estado original
    let index = 0;
    
    while (this._character.lifePoints !== -1
        && monsters.some((monster) => (monster).lifePoints !== -1)) {
      const monster = monsters[index];
      this._character.attack(monster);
      monster.attack(this._character);
      index = (index + 1) % monsters.length;
    }
  
    return super.fight();
  }
}