import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html',
  styleUrls: ['./bestiary.component.scss'],
})
export class BestiaryComponent implements OnInit {
  public shuffled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public shuffleClick(): void {
    this.shuffled = true;
  }
}
