import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Necromancer extends Archetype {
  static _instancias = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Necromancer._instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instancias;
  }

  get energyType(): EnergyType { 
    return this._energy; 
  }
}