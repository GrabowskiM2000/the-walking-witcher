import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import Monsters from '../../../_core/data/monsters.json';
import { IMonster } from '../../../_core/interfaces/monster-interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  public monstersList: IMonster[] = Monsters;
  public monsterLvl = [0, 0, 0];
  public currentMonsters: IMonster[] = [];
  public shuffled = false;
  public monsterMoney = 0;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {}

  public shuffleClick(el: number): void {
    let randomNumber = Math.floor(Math.random() * 100);
    if (this.shuffled === false) {
      if (randomNumber <= 30) {
        // brak 30%
        console.log('lvl - 0');
        this.monsterLvl[el] = 0;
      } else if (randomNumber > 30 && randomNumber <= 62) {
        // lvl1 32%
        console.log('lvl - 1');
        this.monsterLvl[el] = 1;
      } else if (randomNumber > 62 && randomNumber <= 76) {
        // lvl2 22%
        console.log('lvl - 2');
        this.monsterLvl[el] = 2;
      } else if (randomNumber > 76 && randomNumber <= 90) {
        // lvl3 14%
        console.log('lvl - 3');
        this.monsterLvl[el] = 3;
      } else if (randomNumber > 90 && randomNumber <= 97) {
        // lvl4 7%
        console.log('lvl - 4');
        this.monsterLvl[el] = 4;
      } else if (randomNumber > 97 && randomNumber <= 100) {
        // lvl5 3%
        console.log('lvl - 5');
        this.monsterLvl[el] = 5;
      }
      let monstersByLvl = this.monstersList.filter((obj) => {
        return obj.lvl === this.monsterLvl[el];
      });
      this.currentMonsters[el] =
        monstersByLvl[Math.floor(Math.random() * monstersByLvl.length)];
      console.log(this.currentMonsters[el].img);
      this.monsterMoney =
        this.currentMonsters[el].moneyMin +
        Math.floor(
          Math.random() *
            (this.currentMonsters[el].moneyMax -
              this.currentMonsters[el].moneyMin)
        );
    }
    this.shuffled = true;
    console.log(this.shuffled);
    console.log(this.shuffled);
    console.log(this.currentMonsters);
    this.ref.detectChanges();
  }
}
