import Weapon from './weapon'

export default class Dagger extends Weapon {

  //Constructeur 
  constructor(minDmg = 0, maxDmg = 0, criticalChance = 0) {
    super(minDmg, maxDmg, criticalChance);
  }
}