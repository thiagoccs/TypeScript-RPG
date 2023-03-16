import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _enegyType: EnergyType;
  private static _numberOfIntances = 0;

  constructor(name: string) {
    super(name);
    this._enegyType = 'mana';
    Necromancer._numberOfIntances += 1;
  }

  public static override createdArchetypeInstances(): number {
    return Necromancer._numberOfIntances;
  }

  public get energyType(): EnergyType {
    return this._enegyType;
  }
}