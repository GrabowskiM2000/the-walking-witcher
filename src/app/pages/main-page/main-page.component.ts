import { Component, OnInit } from '@angular/core';
import { IMonster } from '../../../_core/interfaces/monster-interface';
import monstersData from '../../../_core/data/monsters.json';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // console.log(this.monsters[1]);
  }

  monster: IMonster[] = monstersData;

  // public shuffleMonster() {
  //   let randomNumber = Math.random();
  //   switch (true) {
  //     case (randomNumber <= 0.7):
  //       this.monster[0] = this.monstersLvl1[Math.floor(Math.random() * 6)];
  //       return
  //     case (randomNumber <= 0.9 && randomNumber > 0.7):
  //       this.monster[0] = this.monstersLvl2[Math.floor(Math.random() * 6)];
  //       return
  //     case (randomNumber > 0.9):
  //       this.monster[0] = this.monstersLvl3[Math.floor(Math.random() * 6)];
  //       return
  //   }
  // }
}
