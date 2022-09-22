import Races from './Races';

export default class Orc extends Races {
  static _instances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc._instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc._instances;
  }
  
  public get maxLifePoints(): number { 
    return this._maxLifePoints; 
  }
}