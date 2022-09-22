import Races from './Races';

export default class Halfling extends Races {
  static _instances = 0;
  private _maxLifePoints: number;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._instances += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling._instances;
  }
  
  public get maxLifePoints(): number { 
    return this._maxLifePoints; 
  }
}