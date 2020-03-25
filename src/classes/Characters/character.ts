import { Weapon } from '../Weapons/weapon';

export class Character {
  //Variables d'instance
  _name: string;
  _hp: number;
  _maxHp: number;
  _defense: number;
  _weapon: Weapon;
  _target?: Character;

  //Constructeur
  constructor(name: string = "", weapon: Weapon = new Weapon()) {
    this._name = name;
    this._hp = Math.floor(Math.random() * 100 + 50);
    this._maxHp = this._hp;
    this._defense = Math.floor(Math.random() * 10);
    this._weapon = weapon;
    this._target = undefined;
  }

  //Getters et setters
  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get hp() {
    return this._hp;
  }

  set hp(hp: number) {
    this._hp = hp;
  }

  get defense() {
    return this._defense;
  }

  set defense(defense: number) {
    this._defense = defense;
  }

  get weapon() {
    return this._weapon;
  }

  set weapon(weapon: Weapon) {
    this._weapon = weapon;
  }

  get target(): Character | undefined {
    return this._target;
  }

  set target(target: Character | undefined) {
    this._target = target;
  }

  //Méthodes d'instance
  // Permet au personnage d'attaquer la cible adverse et lui retirer des PV
  attack = (): string => {
    let result = "";
    if (this.target) {
      let dmg = this.weapon.damage() - this.target.defense;
      this.target.hp -= dmg;

      result = `${this.name} attack ${this.target.name} and do ${dmg} points of damage ! ${this.target.name} has ${this.target.hp} hp left.`
    }

    return result;
  }
}