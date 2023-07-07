import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html',
  styleUrls: ['./bestiary.component.scss'],
})
export class BestiaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public monsterRows = [
    {
      enviroment: 'Lasy',
      image: 'assets/icons/forest.png',
    },
    {
      enviroment: 'Polany',
      image: 'assets/icons/grass.png',
    },
    {
      enviroment: 'Zaludnione',
      image: 'assets/icons/hut.png',
    },
    {
      enviroment: 'Obszary podmokłe',
      image: 'assets/icons/drop.png',
    },
    {
      enviroment: 'Obszary wysokie',
      image: 'assets/icons/mountain.png',
    },
    {
      enviroment: 'Ruiny',
      image: 'assets/icons/ruin.png',
    },
  ];
}
