import { Component, Input, OnInit } from '@angular/core';
import { IMonster } from 'src/_core/interfaces/monster-interface';
import Monsters from '../../../_core/data/monsters.json';

@Component({
  selector: 'app-bestiary-monster',
  templateUrl: './bestiary-monster.component.html',
  styleUrls: ['./bestiary-monster.component.scss'],
})
export class BestiaryMonsterComponent implements OnInit {
  @Input() enviroment: string = '';
  @Input() image: string = '';
  public monstersList: IMonster[] = Monsters;
  public monstersByLvl: any = [[], [], [], [], []];
  public monstersByLvlIndex: any = [0, 0, 0, 0, 0];
  public currentMonsterIndex: number = 0;
  public monsterModalVisible: boolean = false;
  public modalMonster = {
    img: 'assets/images/endriaga-robotnica.png',
    name: 'test Endriaga Robotnica',
    health: 3,
    dmg: 2,
    terrain: 'Lasy',
    lvl: 1,
<<<<<<< HEAD
    money: '2-3',
    skills: [],
=======
    moneyMin: 2,
    moneyMax: 3,
    skills: 'none',
>>>>>>> aaf4597408de77b80732f611ff71587767a0c6cf
    speed: 8,
    luck: 0,
    armor: 0,
    drop: 'czulka',
    dropAmount: 1,
  };
  public modalMonsterSkills = [];

  constructor() {}

  ngOnInit(): void {
    this.getMonsters();
  }

  // ------------------TESTY SYSTEMU WALKI---------------------------

  public player = {
    name: 'Ola',
    health: 3,
    dmg: 1,
    speed: 2,
    luck: 0,
    armor: 0,
  };

  public fight(monster: IMonster): void {
    let fightMonster = monster;
    let attacks = 0;
    let target: any,
      dealer: any,
      winner: any = {
        name: '',
        health: 0,
        dmg: 0,
        speed: 0,
        luck: 0,
        armor: 0,
      };

    const healthRegeneration = (target: IMonster) => {
      const regen = target.skills.filter((obj: any) => {
        return obj.name === 'Regeneracja';
      });

      target.health += regen.value;
      console.log(`${target} uleczył się o ${regen.value}!`);
    };

    const checkFirstAttack = () => {
      if (this.player.speed <= fightMonster.speed) {
        target = this.player;
        dealer = fightMonster;
        attacks = Math.floor((dealer.speed - target.speed) / 2) + 1;
        // console.log(Math.floor((dealer.speed - target.speed) / 2) + 1);
        if (attacks === 0) {
          attacks = 1;
        }
      } else if (this.player.speed > fightMonster.speed) {
        target = fightMonster;
        dealer = this.player;
        attacks = Math.floor((dealer.speed - target.speed) / 2) + 1;
        // console.log(Math.floor((dealer.speed - target.speed) / 2) + 1);
        if (attacks === 0) {
          attacks = 1;
        }
      }

      console.log(
        `Pierwszy atakuje: ${dealer.name} (Stosunek szybkości: ${dealer.speed} / ${target.speed})`
      );
    };

    const attack = () => {
      console.log(`fightMonster = ${fightMonster.health}`);
      console.log(`this.modalMonster = ${this.modalMonster.health}`);
      attacks = Math.floor((dealer.speed - target.speed) / 2) + 1;
      if (attacks <= 0) {
        attacks = 1;
      }

      console.log(`ilość ataków: ${attacks}`);

      for (let i = 1; i <= attacks; i++) {
        if (dealer.luck > 0 && dealer.luck * 10 > Math.random() * 100) {
          if (dealer.dmg - target.armor > 0) {
            target.health -= (dealer.dmg - target.armor) * 2;
          }
          console.log(
            `${dealer.name} trafia krytycznie i zadaje ${
              (dealer.dmg - target.armor) * 2
            } obrażeń ${target.name} zostało ${target.health} życia`
          );
        } else {
          if (dealer.dmg - target.armor > 0) {
            target.health -= dealer.dmg - target.armor;
          }
          console.log(
            `${dealer.name} zadaje ${dealer.dmg - target.armor} obrażeń ${
              target.name
            } zostało ${target.health} życia`
          );
        }

        if (target.health <= 0) {
          winner = dealer;
          console.log(`Wygrywa: ${dealer.name} zapas życia: ${dealer.health}`);
          this.player.health = 3;
          throw winner;
        }

        if (i === attacks) {
          attacks = 1;
          [target, dealer] = [dealer, target];
          // console.log(`Kolej ataku: ${dealer.name}`);
          attack();
        }
      }
    };
    checkFirstAttack();
    attack();
  }

  // ----------------------------------------------------------------

  public getMonsters(): void {
    this.monstersList.forEach((monster) => {
      for (let i = 0; i < 5; i++) {
        this.monstersByLvl[i] = this.monstersList.filter((obj: IMonster) => {
          return obj.terrain === this.enviroment && obj.lvl === i + 1;
        });
      }
    });
  }

  public nextMonster(i: number): void {
    this.monstersByLvlIndex[i]++;
    if (this.monstersByLvlIndex[i] >= this.monstersByLvl[i].length) {
      this.monstersByLvlIndex[i] = 0;
    }
  }

  public showMonsterInfo(i: number): void {
    this.monsterModalVisible = true;
    this.modalMonster = this.monstersByLvl[i][this.monstersByLvlIndex[i]];
    this.modalMonsterSkills =
      this.monstersByLvl[i][this.monstersByLvlIndex[i]].skills[0].name;
    this.fight(this.modalMonster);
  }

  public closeModal(): void {
    this.monsterModalVisible = false;
  }
}
