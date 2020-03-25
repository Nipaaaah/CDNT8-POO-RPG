import { Weapon } from './weapon'

export class Sword extends Weapon {
  constructor() {
    super();
    this._minDmg * 2;
  }
}