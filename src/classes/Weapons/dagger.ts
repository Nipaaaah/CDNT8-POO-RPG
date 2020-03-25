import { Weapon } from './weapon'

export class Dagger extends Weapon {
  constructor() {
    super();
    this._criticalChance * 1.5;
  }
}