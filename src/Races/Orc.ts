import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints: number;
  private static _numberOfIntances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Orc._numberOfIntances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static override createdRacesInstances(): number {
    return Orc._numberOfIntances;
  }
}