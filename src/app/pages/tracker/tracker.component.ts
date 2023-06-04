import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.scss'],
})
export class TrackerComponent implements OnInit {
  public TEST: any = [
    {
      name: 'Pływan ieasdasd asd11',
      progress: 0,
      toUpgrade: 2,
      lvl: 0,
    },
    {
      name: 'Nauka',
      progress: 10,
      toUpgrade: 15,
      lvl: 0,
    },
    {
      name: 'Dieta',
      progress: 0,
      toUpgrade: 7,
      lvl: 0,
    },
  ];

  public isDone: any = [];

  public habitStatusChange(i: any): void {
    this.isDone[i] = !this.isDone[i];
  }

  constructor() {}

  ngOnInit(): void {}
}
