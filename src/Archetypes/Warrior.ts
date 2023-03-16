import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _enegyType: EnergyType;
  private static _numberOfIntances = 0;

  constructor(name: string) {
    super(name);
    this._enegyType = 'stamina';
    Warrior._numberOfIntances += 1;
  }

  public static override createdArchetypeInstances(): number {
    return Warrior._numberOfIntances;
  }

  public get energyType(): EnergyType {
    return this._enegyType;
  }
}