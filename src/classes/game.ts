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
  console.log('Welcome to Neverwinter Nights');
}