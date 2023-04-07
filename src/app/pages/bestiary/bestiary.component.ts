import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bestiary',
  templateUrl: './bestiary.component.html',
  styleUrls: ['./bestiary.component.scss'],
})
export class BestiaryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() shuffled = [];

  public reset(): void {
    // this.shuffled = [false, false, false];
  }
}
