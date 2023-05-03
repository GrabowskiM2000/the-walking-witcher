import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-enviroment',
  templateUrl: './locations-enviroment.component.html',
  styleUrls: ['./locations-enviroment.component.scss'],
})
export class LocationsEnviromentComponent implements OnInit {
  @Input() enviroment: string = '';
  @Input() image: string = '';
  public TESTMIEJSCA = [
    'Jakieś miejsce asdasd',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
    'Inne miejsce',
  ];
  public addModalVisible: boolean = false;
  public addModalHides: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public addLocation(): void {
    this.addModalVisible = true;
    this.addModalHides = false;
  }

  public addLocationClose(): void {
    this.addModalHides = true;
    this.addModalVisible = false;
  }
}
