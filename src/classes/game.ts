import * as readline from 'readline';
import { Hero } from '../classes/Characters/hero';
import { Monster } from '../classes/Characters/monster';
import { Sword } from './Weapons/sword';
import { Dagger } from './Weapons/dagger';
import { Weapon } from './Weapons/weapon';
import { Character } from './Characters/character';
import { inputReader } from '../scripts/tools';

export class Game {
  private _hero: Character;
  private _monster: Character;
  private _turn: string[];

  constructor(hero: Character, monster: Character) {
    this._hero = hero;
    this._monster = monster;
    this._turn = []
  }

  get hero(): Character {
    return this._hero;
  }

  get monster(): Character {
    return this._monster;
  }

  get turn(): string[] {
    return this._turn;
  }

  set turn(turn: string[]) {
    this._turn = turn;
  }

  // Permet de lancer la partie
  // Demande au joueur s'il veut créer un personnage ou non
  public static play = async () => {
    let heroName = await inputReader('Name your Hero:');
    let weapon = await Game.weaponChoice() as Weapon;
    let hero = new Hero(heroName, weapon);
    let monster = new Monster();
    return new Game(hero, monster);
  }

  public static weaponChoice = async () => {
    let weapon = new Weapon();
    let choice = await inputReader(
      'Choose your weapon : [1]Sword - [2]Dagger'
    )
    console.log(choice);
    if (choice === JSON.stringify(1)) {
      weapon = new Sword();
    } else if (choice === JSON.stringify(2)) {
      weapon = new Dagger();
    } else {
      Game.weaponChoice();
    }

    return weapon;
  };
}