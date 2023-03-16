import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _enegyType: EnergyType;
  private static _numberOfIntances = 0;

  constructor(name: string) {
    super(name);
    this._enegyType = 'mana';
    Mage._numberOfIntances += 1;
  }

  public static override createdArchetypeInstances(): number {
    return Mage._numberOfIntances;
  }

  public get energyType(): EnergyType {
    return this._enegyType;
  }
}