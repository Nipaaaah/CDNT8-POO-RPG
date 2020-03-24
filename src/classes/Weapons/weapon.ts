export default class Weapon {
  //Variables d'instance
  private _minDmg: number;
  private _maxDmg: number;
  private _criticalChance: number;

  //Constructeur
  constructor() {
    this._minDmg = Math.floor(Math.random() * 10) + 1;
    this._maxDmg = Math.floor(Math.random() * 10) + 10;
    this._criticalChance = Math.floor(Math.random() * 20) + 1;
  }

  //Getters et Setters
  get minDmg() {
    return this._minDmg;
  }

  set minDmg(minDmg: number) {
    this._minDmg = minDmg;
  }

  get maxDmg() {
    return this._maxDmg;
  }

  set maxDmg(maxDmg: number) {
    this._maxDmg = maxDmg;
  }

  get criticalChance() {
    return this._criticalChance;
  }

  set criticalChance(criticalChance: number) {
    this._criticalChance = criticalChance;
  }
}