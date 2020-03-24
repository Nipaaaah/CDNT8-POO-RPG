import Character from './character'

export default class Hero extends Character {
  private _role: any; //Le role sera une enum

  //Constructeur
  constructor(name = "", hp = 0, maxHp = 0, defense = 0, role = 0) {
    super(name, hp, maxHp, defense);
    this._role = role;
  }

  //Getters et Setters
  get role() {
    return this._role;
  }

  set role(role: number) {
    this._role = role;
  }

  //Méthodes d'instance 
  // Permet de créer un Héros
  createHero = () => {
    // TODO: createHero function
  }

  // Permet à un héros de soigner un de ses alliés
  heal = () => {
    // TODO: heal function
  }
}