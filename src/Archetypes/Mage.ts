import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  static _instancias = 0;
  private _energy: EnergyType;

  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Mage._instancias += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instancias;
  }

  get energyType(): EnergyType { 
    return this._energy; 
  }
}