import * as readline from 'readline';
import Hero from '../classes/Characters/hero';
import Monster from '../classes/Characters/monster';

export default class Game {
  private _heros: Array<Hero>;
  private _monsters: Array<Monster>;

  constructor(heros = [], monsters = []) {
    this._heros = heros;
    this._monsters = monsters;
  }

  generateMonsters = () => {
    // TODO: generateMonsters function
  }
}

export const play = () => {
  console.log('Bienvenue dans les Royaumes Oubliés');

  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Créer un personnage ?  [o/n] ', (answer) => {
    switch (answer.toLowerCase()) {
      case 'o':
        characterCreation();
        break;
      case 'n':
        console.log('Au combat !');
        break;
      default:
        console.log('Commande invalide !');
    }
    rl.close();
  });
}

const characterCreation = () => {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Nom du personnage: ', (name) => {
    console.log(name);
    rl.close();
  });
}