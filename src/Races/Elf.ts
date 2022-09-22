import Races from './Races';

export default class Elf extends Races {
  static _instances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf._instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf._instances;
  }
  
  public get maxLifePoints(): number { 
    return this._maxLifePoints; 
  }
}