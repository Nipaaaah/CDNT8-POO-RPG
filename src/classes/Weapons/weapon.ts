class Weapon {
  //Variables d'instance
  private _minDmg: number;
  private _maxDmg: number;
  private _criticalChance: number;

  //Constructeur
  constructor(minDmg = 0, maxDmg = 0, criticalChance = 0) {
    this._minDmg = minDmg;
    this._maxDmg = maxDmg;
    this._criticalChance = criticalChance;
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