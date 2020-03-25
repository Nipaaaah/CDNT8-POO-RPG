import { Character } from './character'
import { Weapon } from '../Weapons/weapon';

export class Hero extends Character {

  //Constructeur
  constructor(name: string, weapon: Weapon) {
    super(name, weapon);
  }

  // Permet à un héros de soigner un de ses alliés
  heal = () => {
    // TODO: heal function
  }
}