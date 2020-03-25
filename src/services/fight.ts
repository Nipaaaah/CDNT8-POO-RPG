import { Game } from "../classes/game";

class Fight {
  target = (g: Game) => {
    g.hero.target = g.monster;
    g.monster.target = g.hero;
  }

  turn = (g: Game) => {
    this.target(g);
    let turn: string[] = [];
    let rand = Math.random();

    if (rand <= 0.5) {
      turn.push(g.hero.attack());
      turn.push(g.monster.attack());
    } else {
      turn.push(g.monster.attack());
      turn.push(g.hero.attack());
    }

    g.turn = turn;
  }

  game = async () => {
    let g = await Game.play();
    console.log(g);

    while (true) {
      this.turn(g);
      for (let action of g.turn) {
        console.log(action);
      }

      if (g.monster.hp <= 0) {
        console.log('Hero wins !');
      } else if (g.hero.hp <= 0) {
        console.log('Monster wins !');
      }
    }
  }
}

export default Object.freeze(new Fight());