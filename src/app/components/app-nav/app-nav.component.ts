import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss'],
})
export class AppNavComponent implements OnInit {
  public mobileVisible: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  public burgerClick(): void {
    this.mobileVisible = !this.mobileVisible;
  }

  public mobileLinkClick(): void {
    this.mobileVisible = false;
  }

  @HostListener('window:resize', [])
  hideMobileMenu() {
    if (window.innerWidth >= 500) {
      this.mobileVisible = false;
    }
  }

  // public crossClick(): void {
  //   this.mobileVisible = false;
  // }
}
