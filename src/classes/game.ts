import * as readline from 'readline';
import Hero from '../classes/Characters/hero';
import Monster from '../classes/Characters/monster';
import Sword from './Weapons/sword';
import Dagger from './Weapons/dagger';
import Weapon from './Weapons/weapon';

export default class Game {
  private _heros: Array<Hero>;
  private _monsters: Array<Monster>;

  constructor(heros = [], monsters = []) {
    this._heros = heros;
    this._monsters = monsters;
  }

  // Création d'une interface pour faire intéragir le joueur
  public rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  // Permet de lancer la partie
  // Demande au joueur s'il veut créer un personnage ou non
  public play = () => {
    return new Promise((resolve, reject) => {
      this.rl.question('Créer un personnage ?  [o/n] ', (answer) => {
        switch (answer.toLowerCase()) {
          case 'o':
            resolve(this.characterCreation(this.rl));
            break;
          case 'n':
            resolve(this.generateMonsters());
            break;
          default:
            reject(console.log('Commande invalide !'));
        }
      });
    });
  }

  // Permet au joueur de rentrer le nom et l'arme du héros qui sera créé
  public characterCreation = async (readline: any) => {
    console.log("Création du héros")
    let hero = new Hero();

    const heroName: any = await this.questionName(readline);
    const heroWeapon: Weapon = await this.questionWeapon(readline);
    hero.createHero(heroName, heroWeapon);
  }

  // Permet de générer des monstres en fonction de l'équipe de héros
  public generateMonsters = () => {
    console.log("Attention des méchants !");
  }

  public questionName = (readline: any) => {
    return new Promise((resolve, reject) => {
      readline.question('Nom du personnage: ', (name: string) => {
        resolve(heroName = name);
      })
    })
  }

  public questionWeapon = (readline: any) => {
    return new Promise((resolve, reject) => {
      readline.question("Choix de l'arme: [1]Épée [2]Dague", (weapon: number) => {
        switch (weapon) {
          case 1:
            console.log("Ah ! Un chevalier !");
            resolve(heroWeapon = new Sword());
            break;
          case 2:
            console.log("Oooh, un voleur");
            resolve(heroWeapon = new Dagger());
            break;
          default:
            console.log('Commande invalide !')
        }
      });
    });
  }
}