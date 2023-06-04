import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-locations-enviroment',
  templateUrl: './locations-enviroment.component.html',
  styleUrls: ['./locations-enviroment.component.scss'],
})
export class LocationsEnviromentComponent implements OnInit {
  @Input() enviroment: string = '';
  @Input() image: string = '';
  private locationsEnviroment: any;
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

  ngAfterViewInit(): void {
    this.locationsEnviroment = document.querySelector('.locations-enviroment');
  }

  public addLocation(): void {
    this.addModalVisible = true;
    this.addModalHides = false;
    this.locationsEnviroment.scrollTop = 0;
  }

  public addLocationClose(): void {
    this.addModalHides = true;
    this.addModalVisible = false;
  }
}
