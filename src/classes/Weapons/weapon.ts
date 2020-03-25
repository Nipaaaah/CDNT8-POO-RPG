export class Weapon {
  //Variables d'instance
  _minDmg: number;
  _maxDmg: number;
  _criticalChance: number;

  //Constructeur
  constructor() {
    this._minDmg = Math.floor(Math.random() * 10) + 1;
    this._maxDmg = Math.floor(Math.random() * 10) + 10;
    this._criticalChance = Math.floor(Math.random() * 20) + 1;
  }

  damage = () => {
    let dmg = Math.floor(Math.random() * (this._maxDmg - this._minDmg)) + this._minDmg;
    let rand = Math.random();
    rand < this._criticalChance && dmg * 1.5;

    return dmg;
  }
}