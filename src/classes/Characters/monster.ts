import { Character } from './character'
import { Weapon } from '../Weapons/weapon';

export class Monster extends Character {

  //Constructeur
  constructor() {
    super();
    this._name = this.randomName();
    this._weapon = new Weapon();
  }

  randomName = () => {
    let name = Math.random().toString(36).replace(/[^a-z]+/g, '')
    return name[0].toUpperCase() + name.substring(1)
  }
}