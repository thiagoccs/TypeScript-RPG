import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(private _fighter1: Fighter, private _fighter2: Fighter) {
    super(_fighter2);
  }

  fight(): number {
    while (this._fighter1.lifePoints !== -1
        && this._fighter2.lifePoints !== -1) {
      if (this._fighter2.lifePoints === -1) break;
      this._fighter2.attack(this._fighter1);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}