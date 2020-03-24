import Weapon from '../Weapons/weapon';

export default class Character {
  //Variables d'instance
  private _name: string;
  private _hp: number;
  private _maxHp: number;
  private _defense: number;
  private _weapon: Weapon;

  //Constructeur
  constructor(
    name = "",
    hp = 0,
    maxHp = 0,
    defense = 0,
    weapon = new Weapon()
  ) {
    this._name = name;
    this._hp = hp;
    this._maxHp = maxHp;
    this._defense = defense;
    this._weapon = weapon;
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

  get maxHp() {
    return this._maxHp;
  }

  set maxHp(maxHp: number) {
    this._maxHp = maxHp;
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

  //Méthodes d'instance
  // Permet au personnage d'attaquer la cible adverse et lui retirer des PV
  attack = (target: Character) => {
    // TODO: add target();
    // TODO: attack function 
  }

  // Permet de cibler l'adversaire avant de l'attaquer
  target = () => {
    // TODO: target function
    // Définir qui cible qui et check si personne target 2 fois la même cible
  }
}