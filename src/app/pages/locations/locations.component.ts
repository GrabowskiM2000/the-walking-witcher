import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public locations = [
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
      enviroment: 'Bagna',
      image: 'assets/icons/drop.png',
    },
    {
      enviroment: 'Wyżyny',
      image: 'assets/icons/mountain.png',
    },
    {
      enviroment: 'Ruiny',
      image: 'assets/icons/ruin.png',
    },
  ];
}
